"use strict"

let btn = document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("#titulo1").classList.toggle("estilo");
    document.querySelector("#titulo2").classList.toggle("estilo");
    document.querySelector("#titulo3").classList.toggle("estilo");
});