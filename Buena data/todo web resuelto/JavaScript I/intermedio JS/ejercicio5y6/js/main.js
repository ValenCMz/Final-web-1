"use strict"

let btn = document.getElementById("btn-enviar");
let titulo = document.getElementById("nombre-apellido");//levanta el contenedor completo no solo el contenido

let btn2 = document.getElementById("btn-div")
let conteiner = document.getElementById("contenedorsinestilo");


btn.addEventListener("click", mostrardatos);

function mostrardatos(event){
    event.preventDefault();
    console.log("entra al mostrar datos");
    let Nombre = document.getElementById("nombre").value;
    let Apellido = document.getElementById("apellido").value;
    titulo.innerHTML = "Tu nombre es " + Nombre + Apellido ;
}

btn2.addEventListener("click",cambiarestilo);

function cambiarestilo(event){
    event.preventDefault();
    conteiner.classList.toggle("estilo");
    conteiner.classList.toggle("estilo-div");
}