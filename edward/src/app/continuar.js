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

    Antioquia: ["--Seleccione una ciudad","Bello", "Envigado", "Itagui", "La Estrella","Medellin","Rionegro","Sabaneta"],
    Atlántico: ["--Seleccione una ciudad","Barranquilla"],
    Bogotá: ["--Seleccione una ciudad","Bogota"],
    Bolívar: ["--Seleccione una ciudad","Cartagena", "Magangue"],
    Boyacá: ["--Seleccione una ciudad","Tunja", "Chiquinquira"],
    Caldas: ["--Seleccione una ciudad","Manizales", "chinchira"],
    Cauca : ["--Seleccione una ciudad","Popayan", "Caloto"],
    Córdoba: ["--Seleccione una ciudad","Monteria"],
    Cundinamarca: ["--Seleccione una ciudad","Cajica", "Chia", "Fusagasuga", "Girardot", "Mosqueria","Zipaquira"],
    Huila: ["--Seleccione una ciudad","Neiva", "Garzon"],
    Magdalena: ["--Seleccione una ciudad","Rodadero", "Santa Marta"],
    Meta: ["--Seleccione una ciudad","Villaviciencio"],
    Nariño: ["--Seleccione una ciudad","Pasto"],
    NortedeSantander: ["--Seleccione una ciudad","Cucuta"],
    Quindío: ["--Seleccione una ciudad","Armenia", "Calarca"],
    Risaralda: ["--Seleccione una ciudad","Pereira"],
    SanAndrésyProvidencia: ["--Seleccione una ciudad","San Andres"],
    Santander: ["--Seleccione una ciudad","Bucaramanga", "Zona de Floridablanca"],
    Sucre: ["--Seleccione una ciudad","sincelejo"],
    Tolima: ["--Seleccione una ciudad","Ibague"],
    ValledelCauca: ["--Seleccione una ciudad","Cali","Jamundi","Palmira","Tulua"]
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


