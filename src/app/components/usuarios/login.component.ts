import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  login() : void {
    if(this.usuario.email == null || this.usuario.password == null){
      swal.fire(
        {
          icon:'error', 
          title: 'Login failed', 
          text: 'Username o password son invalidos!!!', 
          footer: 'Kalum v1.0.0'
        });
        return;
    }
    this.authService.login(this.usuario).subscribe(response => {
      const payload = this.authService.getToken(response.token);      
      this.authService.saveToken(response.token);
      this.authService.saveUser(payload);      
      swal.fire({
        icon:'success', 
        title: 'Login success', 
        text: `Bienvenido ${payload.email} al sistema!!`, 
        footer: 'kalum v1.0.0'
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/home']);
        }
      });
    }, error => {
      if(error.status == 400){
        swal.fire(
          {
            icon:'error', 
            title: 'Login failed', 
            text: 'Username o password son incorrectos, revise sus credenciales!!!', 
            footer: 'Kalum v1.0.0'
          });
      } else {
        swal.fire(
          {
            icon:'error', 
            title: 'Service failed', 
            text: 'Error al momento de conectarse a los servicios de Kalum', 
            footer: 'Kalum v1.0.0'
          });
      }
    });
  }
}
