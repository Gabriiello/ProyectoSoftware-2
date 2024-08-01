import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MetricasComponent } from './metricas/metricas.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/metricas', component: MetricasComponent },
  { path: 'admin/cuestionarios', component: CuestionariosComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
