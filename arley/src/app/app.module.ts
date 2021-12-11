import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './reportes/navbar/navbar.component';
import { TablaRegistrosComponent } from './reportes/tabla-registros/tabla-registros.component';
import { PaginaInicioComponent } from './reportes/pagina-inicio/pagina-inicio.component';
import { ServiciogeneralService } from './reportes/serviciogeneral.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    NavbarComponent,
    TablaRegistrosComponent,
    PaginaInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiciogeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
