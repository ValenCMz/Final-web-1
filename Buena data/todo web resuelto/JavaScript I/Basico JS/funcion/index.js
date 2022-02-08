"use strict"

let btn = document.querySelector("#btn").addEventListener("click",imprimirsaludo);

document.querySelector("#saludo").addEventListener("click",saludar);

function saludar(){
    console.log("hola mauro");
    console.log("esto es una funcion que saluda");
    console.log("esto salta cuando se inicia el programa");
}
function imprimirsaludo(){
    var nombre = document.getElementById("input").value;
    console.log("hola " + nombre);
}



