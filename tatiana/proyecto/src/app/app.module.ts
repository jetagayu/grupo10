import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritosupComponent } from './carrito/carritosup/carritosup.component';
import { BarrahorizontalnavbarComponent } from './barrahorizontalnavbar/barrahorizontalnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritosupComponent,
    BarrahorizontalnavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
