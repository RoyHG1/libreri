const get_data_login = (correo,password) => {
    let data = {
        correo: correo,
        password: password
    }
    return data;
}


const post = (url,datos)=>{
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(datos), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>console.log(data))
}

const validar_datos_registro = ()=>{
    let nombre = document.getElementById("registro_nombre").value
    let apellido=document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let password= document.getElementById("password").value
    if(nombre == "" || apellido == "" || email=="" ||password=="" ){
        document.getElementById("form").setAttribute("action","")
        console.log("llena todo los datos")

    }else{
        document.getElementById("form").setAttribute("action","registro.php")
    }
}
let btn_login = document.getElementById("btn_login");
let btn_registro = document.getElementById("btn_registro");
let btn_modal_login = document.getElementById("btn_modal_login");
let btn_modal_registro = document.getElementById("btn_modal_registro");
let modal_registro = document.getElementById("modal_registro");
let modal_login = document.getElementById("modal_login");

   
btn_login.addEventListener("click", ()=>{
        let email =document.getElementById("login_email").value
        let password =document.getElementById("login_password").value
        post("login.php",get_data_login(email,password))
});
btn_registro.addEventListener("click",(e)=>{
    let nombre = document.getElementById("registro_nombre").value
    let apellido=document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let password= document.getElementById("password").value
    if(nombre == "" || apellido == "" || email=="" ||password=="" ){
        e.preventDefault();
        document.getElementById("mensaje_register").innerHTML = "llena todo los datos"

    }else{
        document.getElementById("form").setAttribute("action","registro.php")
    }
    
})

btn_modal_registro.addEventListener("click", ()=>{
    modal_registro.style = "display: flex";
    modal_login.style = "display: none";
})

btn_modal_login.addEventListener("click", ()=>{
    modal_login.style = "display: flex"
    modal_registro.style = "display: none"
})

// cerrar modal x
let cerrar = document.querySelector(".cerrar");

cerrar.addEventListener("click", (e) => {
    // if () {

    // }
    // else {

    // }
})

