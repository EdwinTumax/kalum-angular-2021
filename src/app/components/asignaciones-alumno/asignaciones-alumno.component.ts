import { Component, OnInit } from '@angular/core';
import { AsignacionesAlumnoService } from './asignaciones-alumno.service';

import { AsignacionAlumno } from './asignacion-alumno';
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

}
