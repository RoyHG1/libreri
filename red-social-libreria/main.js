const get_data_login = (correo,password) => {
    let data = {
        correo: correo,
        password: password
    }
    return data;
}
    
const post = (url,datos)=>{
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>console.log(data))
}

let btn_register = document.getElementById("btn_register");
let btn_modal_login = document.getElementById("btn_modal_login");
let btn_modal_registro = document.getElementById("btn_modal_registro");
   
btn_register.addEventListener("click", ()=>{
    let email =document.getElementById("login_email").value;
    let password =document.getElementById("login_password").value;
    post("login.php",get_data_login(email,password))
});
btn_modal_registro.addEventListener("click", ()=>{
   //////
   n=document.getElementById("modal_registro")
   console.log(n);
    //n.style = "display: block"
    //n.setProperty("display", "block");

})
btn_modal_login.addEventListener("click", ()=>{
    ////////
    document.getElementById("")
})



