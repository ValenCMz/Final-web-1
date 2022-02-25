"use strict"

let btn = document.querySelector("#btn").addEventListener("click", function(){
    agregarTarea(document.querySelector("#input").value);
});
let listaTareas = [];

function agregarTarea(input){


    if(listaTareas.length < 10) {
        if (!verificar(input)){
            listaTareas.push(input);
            input = "";}

        else
            alert("LA TAREA YA SE ENCUENTRA EN LA LISTA!")
        }
    else
        {
            alert("LA LISTA YA TIENE 10 ELEMENTOS!");
        }
    mostrar();
}

function mostrar(){

    document.querySelector("#output").innerHTML = "";
    
    for(let elem of listaTareas){
        document.querySelector("#output").innerHTML += "<li>" + elem + "</li>";
    }
    
}

function verificar(tarea){
//verifica que la tarea no exista previamente en el arreglo.
    for(let elem of listaTareas){
        if( elem === tarea){
            return true;
        }
    }
}