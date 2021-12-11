import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsignacionAlumno } from '../asignaciones-alumno/asignacion-alumno';
import { AuthService } from '../usuarios/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAsignacionesPorAlumno() : Observable<AsignacionAlumno[]> {
    return this.httpClient.get<AsignacionAlumno[]>(`${this.endPoint}/Alumnos/${this.authService.usuario.carne}/asignaciones`);
  }

  
}
