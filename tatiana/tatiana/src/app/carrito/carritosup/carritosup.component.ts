import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-carritosup',
  templateUrl: './carritosup.component.html',
  styleUrls: ['./carritosup.component.css']
})
export class CarritosupComponent implements OnInit {

  @Input()
   nombre=('');
   precio=('');

   arriba= {
          
    producto1: { 
    nombre: "azucar",
    precio: 2000 ,
    img: "/assets/imagenes/azucar.jpg"
   
   },

    producto2: {

   nombre: "queso",
   precio: 5000 ,


 },

  producto3:  {
   nombre:"pan",
   precio: 3000,


 } ,

   producto4: {
   nombre:"leche",
   precio: 2500,
    

 },
   
   producto5: {

   nombre:"mortadela",
   precio: 5500,


 }, 

  producto6: {

   nombre:"frijoles",
   precio: 3200,

 

 },
   

}



   data = Object.values(this.arriba) ;

   agregarcarrito= new FormGroup({
 
     
     cantidad: new FormControl (''),
    
    
       


  });
  
             
  
  


 
 agregar(){

   this.agregarcarrito
   let cantidad=this.agregarcarrito.value.cantidad;
   //let name= Element.name;
    
   if (cantidad >=1) { 

           

      

      
     

      alert(this.agregarcarrito.value.data);

   };


    
   

    
    
    

  
   
 
   
 }
 








  constructor() { }

  ngOnInit(): void {

  }
    
    

    

  }



 
function agregar(): void {
  throw new Error('Function not implemented.');
}

