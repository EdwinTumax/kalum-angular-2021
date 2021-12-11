import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from './clase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  urlEndPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getClases() : Observable<Clase[]> {
    //const httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('token')}`});
    //return this.httpClient.get<Clase[]>(urlEndPoint,{headers: httpHeaders});
    return this.httpClient.get<Clase[]>(`${this.urlEndPoint}/clases`);
  }
  
  getClase(uuid : string) : Observable<Clase> {
    return this.httpClient.get<Clase>( `${this.urlEndPoint}/clases/${uuid}`);
  }
  
  

}
