import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login.component';
import { CarrerasTecnicasComponent } from './components/carreras-tecnicas/carreras-tecnicas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'carrerasTecnicas', component: CarrerasTecnicasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
