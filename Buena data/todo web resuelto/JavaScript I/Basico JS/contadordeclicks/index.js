"use strict"

let btn = document.querySelector("#btn").addEventListener("click",contador);
let resultado = document.getElementById("clicks");
let cont = 0;
function contador(){
    cont++;
    resultado.innerHTML = ("hiciste " + cont + " clicks");
}