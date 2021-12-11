<?php

global $enlace;

function conexion(){

    $enlace = mysqli_connect('localhost', 'root', '','ciclog29bd');

    if(!$enlace){
        echo "Error: No se ha podido conectar con la base de datos";
        exit;
    }
    return $enlace;

}
?>