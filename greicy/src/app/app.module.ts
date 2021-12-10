import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioInicialComponent } from './pagos_formulario/formulario-inicial/formulario-inicial.component';
import { MetodoPagoComponent } from './pagos_formulario/metodo-pago/metodo-pago.component';
import { TarjetasComponent } from './pagos_formulario/metodo-pago/tarjetas/tarjetas.component';
import { BancoComponent } from './pagos_formulario/metodo-pago/banco/banco.component';
import { ContraentregaComponent } from './pagos_formulario/metodo-pago/contraentrega/contraentrega.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInicialComponent,
    MetodoPagoComponent,
    TarjetasComponent,
    BancoComponent,
    ContraentregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
