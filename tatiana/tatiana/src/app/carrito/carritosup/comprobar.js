const { Optional } = require("@angular/core");

const agregarButtons = document.querySelectorAll('.agregar');

agregaralcarritobuttons.forEach ((addbuttons) => {

   addbuttons.addEventListener('click',() => console.log('click'))
   
});

const url= "http://localhost:8080/recuperacion/api/producto/"

const contenedor = document.querySelectorAll('tbody')
let resultados = ''

const contenido = new bootstrap.contenido(document.getElementById(contenido))
const row = document.querySelector('row')
const nombreproducto = document.getElementById("nombre")
const precioproducto = document.getElementById("precio")
const cantidadproducto = document.getElementById ("cantidad")

let opcion = ''

btnAgregar.addEventListener('click',()=> {

   nombreproducto.value = ''
   precioproducto.value = ''
   cantidadproducto.value = ''
   
   opcion = 'agregar'

})

const ajax = (options) => {

    let {url,method,succes,error,data} = options
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange",(e) => {
    
        if (xhr.readyState !== 3) return;

        if(xhr.status >= 200 && xhr < 300) {

            let json = JSON.parse(xhr.responseText);
            succes(json);
        }
        else{

            let message= xhr.statusText || "ocurrio un error";
            error('Error ${xhr.status}: ${message}');
        }

        }
    
     
    );
    

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("content-type","application/json; charset=utf-8",);
    xhr.send(JSON.stringify(data));

    };

    const getAll = () => {

     ajax( {

       url: url,
       method: "GET",
       succes: (res) => {
         
         console.log(res);

         res.forEach((comprobar) => {

           resultados += <tr>
               <td width= "10%">${producto.nombreproducto} </td>
               <td width= "35%">${producto.precioproducto} </td>
               <td width= "25%">${producto.cantidadproducto}</td>

            </tr>

         });

           contenedor.innerHTML= resultados
       },
           error: (err) => {

               console.log(err);
               $table.insertAdjacentHTML("afterend",<p><b>${err}</b></p>);
               

           },



     }


     )

    }

