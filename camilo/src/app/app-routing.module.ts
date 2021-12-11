import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './camilo/pagina-principal/pagina-principal.component';
import { RegistrarPersonasComponent } from './camilo/registrar-personas/registrar-personas.component';
import {Pagina404Component} from './camilo/pagina404/pagina404.component';

const routes: Routes = [
  {path: '', component:PaginaPrincipalComponent},
  {path: 'pagina_principal', component:PaginaPrincipalComponent},
  {path: 'formu_registrar', component:RegistrarPersonasComponent},
  {path: '**', component: Pagina404Component}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }