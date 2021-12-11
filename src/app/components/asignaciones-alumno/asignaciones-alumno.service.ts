import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsignacionAlumno } from './asignacion-alumno';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesAlumnoService {
  endPoint = 'http://localhost:8088/kalum-notas/v1';

  constructor(private httpClient: HttpClient) { }

  getAsignacionesPorAlumno() : Observable<AsignacionAlumno[]> {
    return this.httpClient.get<AsignacionAlumno[]>(`${this.endPoint}/asignaciones`);
  }

}
