"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    let suma = 0;
let buton = document.querySelector("#boton");
buton.addEventListener("click", aumentarContador);

function aumentarContador(){
    suma++;
    let contador = document.querySelector("#contador");
    contador.innerHTML = suma;

}   
}