import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritosupComponent } from './carrito/carritosup/carritosup.component';
import { BarrahorizontalnavbarComponent } from './barrahorizontalnavbar/barrahorizontalnavbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { RegistrarPersonasComponent } from './registrar-personas/registrar-personas.component';
import { EnviosDomicilioComponent } from './envios-domicilio/envios-domicilio.component';
import { ServiciogeneralService } from './serviciogeneral.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarritosupComponent,
    BarrahorizontalnavbarComponent,
    PaginaPrincipalComponent,
    Pagina404Component,
    RegistrarPersonasComponent,
    EnviosDomicilioComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    



  ],
  providers: [ ServiciogeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

   

}
