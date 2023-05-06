<?php
    require_once("conexionbd.php");

    if($_POST){
        $conexion = conexionbd();
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        if($nombre == "" || $apellido == "" || $email == "" || $password ==""){
            echo "no se pudo registrar el usuario debido a que los campos estan vacios";

        }else{
            mysqli_query($conexion, "INSERT INTO `usuarios` (`nombre`, `apellido`, `email`, `password`) VALUES ('$nombre', '$apellido', '$email', '$password')");
            echo "se a registrado el usuario ".$nombre ;
        }
    }else{
        echo "hola ando vacio";
    }

?>