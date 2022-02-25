console.log("inicio");

let saludo = document.querySelector("#saludar");
saludo.addEventListener("click", saludarCatedra);

function saludarCatedra(){
let nombre = document.querySelector("#nombre").value;
let mensaje = document.querySelector("#mensaje");
mensaje.innerHTML = "Hola " + nombre;

}