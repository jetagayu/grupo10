import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPersonasComponent } from './camilo/registrar-personas/registrar-personas.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './camilo/pagina-principal/pagina-principal.component';
import { Pagina404Component } from './camilo/pagina404/pagina404.component';
import { ServiciogeneralService } from './camilo/serviciogeneral.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPersonasComponent,
    PaginaPrincipalComponent,
    Pagina404Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [ ServiciogeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
