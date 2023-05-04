<?php
require_once("conexionbd.php");

if($_POST){
$conexion = conexionbd();
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$password = $_POST["password"];
mysqli_query($conexion, "INSERT INTO `usuarios` (`nombre`, `apellido`, `email`, `password`) VALUES ('$nombre', '$apellido', '$email', '$password')");

echo "se a registrado el usuario ".$nombre ;
}else{
    echo "hola ando vacio";
}
//INSERT INTO `usuarios` (`usuario`, `email`, `password`) VALUES ('$name','$email', '$pasword')"
?>