"use strict"

let btn = document.getElementById("btn").addEventListener("click", agregarTarea);


function agregarTarea(event){
    event.preventDefault();
    document.querySelector("#lista-de-tareas").innerHTML += document.querySelector("input").value + " ";
    document.querySelector("input").value = "";
}

