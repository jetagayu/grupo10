import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var depar_tamento:any;
declare var return1:any;
declare var return2:any;
declare var return3:any;
declare var return4:any;
declare var return5:any;
declare var return6:any;
declare var ciu_dad:any;
declare var dire_ccion:any;
declare var dire_ccion1:any;
declare var dire_ccion2:any;
declare var dire_ccion3:any;




@Component({
  selector: 'app-envios-domicilio',
  templateUrl: './envios-domicilio.component.html',
  styleUrls: ['./envios-domicilio.component.css']
})
export class EnviosDomicilioComponent implements OnInit {
  
 
 
  
 
 datosformulario= new FormGroup({
   meal: new FormControl(''),
   category: new FormControl(''),
   dire: new FormControl(''),
   dire1: new FormControl(''),
   dire2: new FormControl(''),
   dire3: new FormControl(''),
   barriooo: new FormControl(''),
   inmu: new FormControl(''),
   inmue: new FormControl(''),
   blo: new FormControl(''),
   bloq: new FormControl(''),
   obser: new FormControl(''),
 });
 return1="";
 return2="";
 return3="";
 return4="";
 return5="";
 return6="";

  recibir_datos(){
    let meal=this.datosformulario.value.meal;
    let retorno_valido= depar_tamento(meal);
    this.return1=retorno_valido;

    let category=this.datosformulario.value.category;
    let retonor2_valido= ciu_dad(category);
    this.return2=retonor2_valido;

    let dire=this.datosformulario.value.dire;
    let retorno3_valido= dire_ccion(dire);
    this.return3=retorno3_valido;

    let dire1=this.datosformulario.value.dire1;
    let retorno4_valido=dire_ccion1(dire1);
    this.return4=retorno4_valido;

    let dire2=this.datosformulario.value.dire2;
    let retorno5_valido=dire_ccion2(dire2);
    this.return5=retorno5_valido;

    let dire3=this.datosformulario.value.dire3;
    let retorno6_valido=dire_ccion3(dire3);
    this.return6=retorno6_valido;
    
  
  }

  ngOnInit(): void {
  }

}
