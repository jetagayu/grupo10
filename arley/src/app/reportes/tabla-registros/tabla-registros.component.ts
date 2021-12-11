import { Component, OnInit } from '@angular/core';
declare var eliminar_registro:any;
declare var mostrar_registros:any;

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css']
})

export class TablaRegistrosComponent implements OnInit {
  constructor() { } 

  ngOnInit(): void {

    }
  // mostrar columna lugar destino
    mostrar: Boolean = false;
    confirmador: String = "mostrar";
    mostrarColumna(){
      if(this.mostrar){
        this.mostrar = false;
        this.confirmador = "ocultar";
      }else{
        this.mostrar = true;
        this.confirmador = "mostrar";
      }      
    }
    ejecucion_doble_envio(){
      this.mostrar = false;
      this.cargar();
      this.mostrarColumna();
    }
    ejecucion_doble_pago(){
      this.mostrar = true;
      this.cargar();
      this.mostrarColumna();
    }

    // construcción de funciones
    cargar(){
      mostrar_registros();
    }
    eliminar(){
      eliminar_registro();
    }
  }
