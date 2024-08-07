import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MetricasComponent } from './metricas/metricas.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/metricas', component: MetricasComponent },
  { path: 'admin/cuestionarios', component: CuestionariosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];