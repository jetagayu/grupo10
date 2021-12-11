import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './reportes/navbar/navbar.component';
import { TablaRegistrosComponent } from './reportes/tabla-registros/tabla-registros.component';
import { PaginaInicioComponent } from './reportes/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-pagina-inicio', pathMatch: 'full'},
  {path: 'app-reportes', component:ReportesComponent},
  {path: 'app-navbar', component:NavbarComponent},
  {path: 'app-tabla-registros', component:TablaRegistrosComponent},
  {path: 'app-pagina-inicio', component:PaginaInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
