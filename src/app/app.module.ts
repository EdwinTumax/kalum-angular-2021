import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './components/usuarios/auth.service';
import { ClasesService } from './components/home/clases.service';
import { AuthInterceptor } from './components/interceptors/auth';
import { TokenInterceptor } from './components/interceptors/token';
import { CarrerasTecnicasComponent } from './components/carreras-tecnicas/carreras-tecnicas.component';
import { AsignacionesAlumnoComponent } from './components/asignaciones-alumno/asignaciones-alumno.component';
import { FormAsignacionAlumnoComponent } from './components/asignaciones-alumno/form-asignacion-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CarrerasTecnicasComponent,
    AsignacionesAlumnoComponent,
    FormAsignacionAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [AuthService, ClasesService, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
