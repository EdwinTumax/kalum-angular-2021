import { Component, OnInit } from '@angular/core';
import { AsignacionesAlumnoService } from './asignaciones-alumno.service';

import { AsignacionAlumno } from './asignacion-alumno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignaciones-alumno',
  templateUrl: './asignaciones-alumno.component.html',
  styles: [
  ]
})
export class AsignacionesAlumnoComponent implements OnInit {
  asignacionesPorAlumno: any[] = [];

  constructor(private asignacionesAlumnoService: AsignacionesAlumnoService) { }

  ngOnInit(): void {
    this.asignacionesAlumnoService.getAsignacionesPorAlumno().subscribe((response) => {
      this.asignacionesPorAlumno = response;
    });
  }

  eliminar(asignacionAlumno: AsignacionAlumno): void {
    Swal.fire({
      title: 'Eliminar asignación',
      text: "Está seguro de eliminar el registro?",
      icon: 'warning',
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar el registro!'      
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.asignacionesAlumnoService.delete(asignacionAlumno.asignacionId).subscribe(() => {
          this.asignacionesPorAlumno = this.asignacionesPorAlumno.filter(asig => asig != asignacionAlumno)
        });
      }
    })
  }

}
