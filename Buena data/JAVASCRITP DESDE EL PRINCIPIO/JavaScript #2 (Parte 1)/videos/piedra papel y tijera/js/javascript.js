"use strict"

document.querySelector("#btn-play").addEventListener("click", jugar);
let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];


function jugar(){
    let random = Math.floor(Math.random() * opciones.length);
    console.log(random);
    let opcion = opciones[random];

    document.querySelector(".result").innerHTML = opcion;


}