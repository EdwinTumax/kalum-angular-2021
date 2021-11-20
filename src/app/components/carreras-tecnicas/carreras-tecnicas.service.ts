import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarreraTecnica } from './carrera-tecnica';

@Injectable({
  providedIn: 'root'
})
export class CarrerasTecnicasService {

  endPoint = 'http://localhost:8088/kalum-notas/v1';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCarrerasTecnicas() : Observable<CarreraTecnica[]> {
    return this.httpClient.get<CarreraTecnica[]>(`${this.endPoint}/CarrerasTecnicas`);
  }
}
