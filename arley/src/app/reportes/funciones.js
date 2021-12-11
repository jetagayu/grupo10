function eliminar_registro(){
 swal({
       title: "¡ Función eliminar !",
       text: "Se elimino con exito!",
       icon: "success",
       button: "Aceptar",
     }).then(function(){ 
      location.reload();}
      );
     
}
function NO_eliminar_registro(){
  swal({
      title: "¡ Función eliminar !",
      text: "No se elimino con exito!",
      icon: "Error",
      button: "Aceptar",
    }).then(function(){ 
      location.reload();}
      );
}
function mostrar_registros(){
   swal({
       title: "¡ Función Cargar información !",
       text: "Si se encontrar registro de reportes.",
       icon: "success",
       button: "Aceptar",
     })
}
function No_mostrar_registros(){
  swal({
      title: "¡ Función Cargar información !",
      text: "No se encontrar registro de reportes.",
      icon: "error",
      button: "Aceptar",
    })
}

