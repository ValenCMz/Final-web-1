"use strict"

document.querySelector("#btn-incrementar").addEventListener("click", function(e) {sumar(1)});
document.querySelector("#btn-decrementar").addEventListener("click", function(e){sumar(-1)});
document.querySelector("#btn-agregar").addEventListener("click", agregarMas);
let CantPasos = 0;

//invento un parametro de entrada
function sumar(pasos){
    CantPasos += pasos;
    document.querySelector(".pasos").innerHTML = CantPasos;
}

function agregarMas(){
    let valor = document.querySelector("#input-pasos").value;    
    let numeropasos = Number(valor);
    sumar(numeropasos);
}