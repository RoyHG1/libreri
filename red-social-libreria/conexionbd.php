<?php
function conexionbd(){
    
    $usuario="root";
    $pass="";
    $servidor="localhost";
    $bd="ecommer";

    $mysqli =mysqli_connect($servidor, $usuario, $pass, $bd );
    if($mysqli->connect_errno){
        return "error";
    } 
    return $mysqli;
   
}
?>
