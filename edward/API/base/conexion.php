<?php

global $enlace;

function conexion (){

 $enlace = mysqli_connect('localhost', 'root' ,'' ,'ciclog29bd');

 if(!$enlace){
   echo "Erorr no se puede conectar a la base de datos";
    exit;
 }

 return $enlace;



}



?>