<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header("Access-Control-Allow-Methods: POST");

if($_SERVER['REQUEST_METHOD'] === 'POST'){


$json =file_get_contents('php://input');

$params = json_decode($json);

require("../base/conexion.php");

$conexion = conexion();

mysqli_query($conexion, "INSERT INTO usuarios (meal,category,dire,dire1,dire2,dire3,barriooo,inmu,inmue,blo,bloq,obser) VALUES ('$params->meal','$params->category','$params->dire','$params->dire1','$params->dire2','$params->dire3','$params->barriooo','$params->inmu','$params->inmue','$params->blo','$params->bloq','$params->obser')");     

class Result{}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Se registro con exito';

header('Content-Type: application/json');

mysqli_query($conexion, "INSERT INTO usuarios (sexo_usuario,cedula,nombre,username,email,contrasena) VALUES ('$params->sexo_usuario', '$params->cedula','$params->nombre','$params->username','$params->email','$params->contrasena')");            

class Result{}

$response = new Result();
$response -> resultado ='OK';
$response -> mensaje = 'Se registro con exito el usuario';

header('Content-Type: application/json');

echo json_encode($response); 


}
?>