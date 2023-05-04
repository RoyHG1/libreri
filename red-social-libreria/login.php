<?php
    require_once("conexionbd.php");

    $datos = json_decode(file_get_contents("php://input"),true);
    if ($datos) {
        $conexion = conexionbd();
        $correo = $datos["correo"];
        $password = $datos["password"];
        
        $consulta = mysqli_fetch_assoc(mysqli_query($conexion,"SELECT * FROM usuarios WHERE email = '$correo' AND password = '$password' "));
        
        if ($consulta == null) {
            echo json_encode("ese usuario no está registrados");
        }
        else {
            echo json_encode("se inició sesió correctamente");
        }
    }
?>