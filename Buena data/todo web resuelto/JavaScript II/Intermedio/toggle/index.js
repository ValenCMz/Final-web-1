"use strict"

let btn1 = document.querySelector("#btn1").addEventListener("click", function(){
    verMas(document.querySelector("#span1"));
})

let btn2 = document.querySelector("#btn2").addEventListener("click", function(){
    verMas(document.querySelector("#span2"));
})

let btn3 = document.querySelector("#btn3").addEventListener("click", function(){
    verMas(document.querySelector("#span3"));
})


function verMas(campo){

    campo.classList.toggle("oculto");
}