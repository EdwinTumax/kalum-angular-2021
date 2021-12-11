import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Usuario } from '../usuarios/usuario';
import { ClasesService } from '../home/clases.service';
import { Clase } from '../home/clase';
import {Moment} from 'moment';

@Component({
  selector: 'app-form-asignacion-alumno',
  templateUrl: './form-asignacion-alumno.component.html',
  styles: [
  ]
})
export class FormAsignacionAlumnoComponent implements OnInit {

  usuario: Usuario;
  clase: Clase;

  constructor(private authService: AuthService, 
    private claseService: ClasesService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const uuid = params.get('uuid');
      if(uuid){
        this.claseService.getClase(uuid).subscribe(response => {
          this.clase = response;
          this.usuario = this.authService.usuario;
        })
      }
    })
  }

}
