"use strict"

let btn = document.getElementById("botoncito");
let eldiv = document.getElementById("contenedor");

btn.addEventListener("click", ocultardiv);
//btn.addEventListener("onclick", ocultardiv);

function ocultardiv(event){
    event.preventDefault();
    eldiv.classList.add("ocultar");
    console.log("se oculto el contenedor");
}
//----------------------------------------------
//CALCULADORA-----------------------------------

let result = document.getElementById("resultado");
let valorA = document.getElementById("valor1");
let valorB = document.getElementById("valor2");

//result.addEventListener("click",)

function Sumar(valorA,valorB){
    e.preventDefault();
    result.innerHTML = valorA + valorB;
}

function Restar(valorA,valorB){
    e.preventDefault();
    result.innerHTML = valorA - valorB;
}

function Multiplicar(valorA,valorB){
    e.preventDefault();
    result.innerHTML = valorA * valorB;
}

function Dividir(valorA,valorB){
    e.preventDefault();
    result.innerHTML = valorA / valorB;
}
