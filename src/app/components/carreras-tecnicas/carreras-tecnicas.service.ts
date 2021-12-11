import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarreraTecnica } from './carrera-tecnica';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrerasTecnicasService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  getCarrerasTecnicas() : Observable<CarreraTecnica[]> {
    return this.httpClient.get<CarreraTecnica[]>(`${this.endPoint}/CarrerasTecnicas`);
  }
}
