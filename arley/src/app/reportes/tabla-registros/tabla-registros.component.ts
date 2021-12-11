import { Component, OnInit} from '@angular/core';
import { ServiciogeneralService } from '../serviciogeneral.service';


declare var eliminar_registro:any;
declare var NO_eliminar_registro:any;
declare var mostrar_registros:any;
declare var No_mostrar_registros:any;

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css']
})

export class TablaRegistrosComponent implements OnInit {
  textoDeInput: String = "";
  registros = null; 
  registro = {
    Codigo: "",
    Fecha:"",
    Hora:"",
    Producto: "",
    Valor: "",
    Lugar_destino:"",
    Identificador_usuario:"",
  }

  constructor(private APIService: ServiciogeneralService) {} 

  ngOnInit(): void {
    this.listar_registro();
    }
    // función listar
  listar_registro(){
    this.APIService.lista_datos().subscribe((data:any)=>{
      this.registros = data
    });
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
      if(this.registros === null){No_mostrar_registros()}else{
      mostrar_registros();}
    }
    
    // capturar codigo para eliminar.
    seleccion_codigo(registro_select: any) {      
      this.APIService.Eliminar_persona(registro_select.Codigo).subscribe((data:any) => {
          if(data['resultado'] == 'SI'){
            eliminar_registro();
          }else{
            NO_eliminar_registro();
          }    
        }); 
      }

  }


