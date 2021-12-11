import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { Usuario } from '../usuarios/usuario';
import { ClasesService } from '../home/clases.service';
import { Clase } from '../home/clase';
import * as moment from 'moment';
import { AsignacionesAlumnoService } from './asignaciones-alumno.service';
import { CrearAsignacion } from './crear-asignacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-asignacion-alumno',
  templateUrl: './form-asignacion-alumno.component.html',
  styles: [
  ]
})
export class FormAsignacionAlumnoComponent implements OnInit {

  usuario: Usuario;
  clase: Clase;
  crearAsignacion: CrearAsignacion = new CrearAsignacion();

  constructor(private authService: AuthService, 
    private claseService: ClasesService, 
    private activatedRoute: ActivatedRoute,
    private asignacionesAlumnoService: AsignacionesAlumnoService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const uuid = params.get('uuid');
      if(uuid){
        this.claseService.getClase(uuid).subscribe(response => {
          this.clase = response;
          this.usuario = this.authService.usuario;
          this.crearAsignacion.Carne = this.usuario.carne;
          this.crearAsignacion.ClaseId = this.clase.claseId;
          this.crearAsignacion.FechaAsignacion = moment().format("YYYY-MM-DD"); 
        })
      }
    })
  }

  crear(): void {
    this.asignacionesAlumnoService.create(this.crearAsignacion).subscribe(response => {
      Swal.fire({
        icon:'success', 
        title: 'Asignación creada!!!', 
        text: `La asignación ${response.clase.descripcion} fue reada con exito!!!!`, 
        footer: 'kalum v1.0.0'
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/asignacionesPorAlumno']);
        }
      });
    })
  }


}
