import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;

  constructor(private http: HttpClient) { }

  public get token() : string {
    if(this._token !=  null) {
      return this._token;
    } else if(this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  public get usuario(): Usuario {
    if(this._usuario != null){
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }


  login(usuario: Usuario) : Observable<any> {
    const urlEndPoint = 'http://localhost:8088/kalum-notas/v1/cuentas/login';
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(urlEndPoint,usuario, {headers: httpHeaders});
  }

  logout() : void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  saveUser(payload: any) :  void {
    this._usuario = new Usuario();
    this._usuario.email = payload.email;
    this._usuario.nombres = payload.nombres;
    this._usuario.apellidos = payload.apellidos;
    this._usuario.username = payload.username;
    this._usuario.carne = payload.carne;
    this._usuario.roles = payload.roles;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  saveToken(token:string) : void {
    this._token = token;
    sessionStorage.setItem('token',token);
  }

  getToken(token: string) : any {
    if(token != null){
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    const payload = this.getToken(this.token)
    if(payload != null && payload.username && payload.username.length > 0){
      return true;
    }
    return false;
  }

  isTokenExpired(): boolean {
    const now = new Date().getTime() / 1000;
    if(this.getToken(this.token).exp < now) {
      return true;
    }
    return false;
  }

}
