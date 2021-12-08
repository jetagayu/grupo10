/*FUNCION DE¨PARTAMENTO*/
function  depar_tamento(meal){
    var deparconteo = meal.length;
    if(meal.length==0)
    
    
    { var mensaje2 = '*CAMPO OBLIGATORIO INGRESE UN DEPARTAMENTO*';
    document.querySelector('.mensaje').innerHTML=mensaje2;       
     
       /* alert(meal.length)*/}
        
    /*else{
        alert(meal.length)
    }
*/
    else {
        var mensaje2 = '';
    document.querySelector('.mensaje').innerHTML=mensaje2
    }
 }
/*FUNCION CIUDAD*/
 function  ciu_dad(category){
    if(category.length==0  )
    { var mensaje3 = '*CAMPO OBLIGATORIO INGRESE UNA CIUDAD*';
    document.querySelector('.mensajea').innerHTML=mensaje3;     }
     else if(category.length>19)
     { var mensaje3 = '*CAMPO OBLIGATORIO INGRESE UNA CIUDAD*';
    document.querySelector('.mensajea').innerHTML=mensaje3;     }
    else {
        var mensaje3 = '';
    document.querySelector('.mensajea').innerHTML=mensaje3
    }
 }

/*FUNCION DIRECCION*/
function  dire_ccion(dire){
    if(dire.length==0)
    { var mensaje4 = '*CAMPO OBLIGATORIO INGRESE UNA DIRECCION*';
    document.querySelector('.mensajeb').innerHTML=mensaje4;    }
         else {
        var mensaje4 = '';
    document.querySelector('.mensajeb').innerHTML=mensaje4
    }
 }

 /*FUNCION DIRECCION1*/
function  dire_ccion1(dire1){
    if(dire1.length==0)
    { var mensaje5 = '*CAMPO OBLIGATORIO*';
    document.querySelector('.mensajec').innerHTML=mensaje5;    }
         else {
        var mensaje5 = '';
    document.querySelector('.mensajec').innerHTML=mensaje5
    }
 }

 /*FUNCION DIRECCION2*/
function  dire_ccion2(dire2){
    if(dire2.length==0)
    { var mensaje6 = '*CAMPO OBLIGATORIO*';
    document.querySelector('.mensajed').innerHTML=mensaje6;    }
         else {
        var mensaje6 = '';
    document.querySelector('.mensajed').innerHTML=mensaje6
    }
 }

 /*FUNCION DIRECCION3*/
function  dire_ccion3(dire3){
    if(dire3.length==0)
    { var mensaje7 = '*CAMPO OBLIGATORIO*';
    document.querySelector('.mensajee').innerHTML=mensaje7;    }
         else {
        var mensaje7 = '';
    document.querySelector('.mensajee').innerHTML=mensaje7
    }
 }



var mealsByCategory = {

    Aa: ["--Seleccione una ciudad","Bello", "Envigado", "Itagui", "La Estrella","Medellin","Rionegro","Sabaneta"],
    B: ["--Seleccione una ciudad","Barranquilla"],
    C: ["--Seleccione una ciudad","Bogota"],
    D: ["--Seleccione una ciudad","Cartagena", "Magangue"],
    E: ["--Seleccione una ciudad","Tunja", "Chiquinquira"],
  F: ["--Seleccione una ciudad","Manizales", "chinchira"],
  G : ["--Seleccione una ciudad","Popayan", "Caloto"],
  H: ["--Seleccione una ciudad","Monteria"],
  I: ["--Seleccione una ciudad","Cajica", "Chia", "Fusagasuga", "Girardot", "Mosqueria","Zipaquira"],
  J: ["--Seleccione una ciudad","Neiva", "Garzon"],
  K: ["--Seleccione una ciudad","Rodadero", "Santa Marta"],
  L: ["--Seleccione una ciudad","Villaviciencio"],
  M: ["--Seleccione una ciudad","Pasto"],
  N: ["--Seleccione una ciudad","Cucuta"],
  NN: ["--Seleccione una ciudad","Armenia", "Calarca"],
  O: ["--Seleccione una ciudad","Pereira"],
  P: ["--Seleccione una ciudad","San Andres"],
  Q: ["--Seleccione una ciudad","Bucaramanga", "Zona de Floridablanca"],
  R: ["--Seleccione una ciudad","sincelejo"],
  S: ["--Seleccione una ciudad","Ibague"],
  T: ["--Seleccione una ciudad","Cali","Jamundi","Palmira","Tulua"]
 }

    function changecat(value) {
        if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in mealsByCategory[value]) {
                catOptions += "<option>" + mealsByCategory[value][categoryId] + "</option>";
            }
            document.getElementById("category").innerHTML = catOptions;
        }
    }





