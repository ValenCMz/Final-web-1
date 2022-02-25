"use strict"

let btn = document.getElementById("btn.prender").addEventListener("click",encender);
let btn2 = document.getElementById("btn.apagar").addEventListener("click",apagar);

function encender(){
    let imagen = document.getElementById("imagen").src = "lamparaon.png";
    let fondo = document.getElementById("fondo").classList.remove("apagado");
    fondo = document.getElementById("fondo").classList.add("encendido"); 
}

function apagar(){
    let imagen = document.getElementById("imagen").src = "lamparaoff.png";
    let fondo = document.getElementById("fondo").classList.remove("encendido");
    fondo = document.getElementById("fondo").classList.add("apagado");
}