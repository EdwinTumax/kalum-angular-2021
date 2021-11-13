import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  private _name: string;
  private _authenticated: boolean;

  public get name(): string {
    if(this.authService != null){
      this._name = this.authService.usuario.email;
      return this._name
    }
    return null;
  }

  public get authenticated() : boolean {
    if(this.authService != null){
      this._authenticated = this.authService.isAuthenticated();
      return this._authenticated;
    }
    return false;
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() :void {
    const name = this.name;
    this.authService.logout();
    swal.fire({
      icon:'success', 
      title: 'Logout', 
      text: `Hata luego ${name}!!!`, 
      footer: 'kalum v1.0.0'
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/login']);
      }
    });
  }

}
