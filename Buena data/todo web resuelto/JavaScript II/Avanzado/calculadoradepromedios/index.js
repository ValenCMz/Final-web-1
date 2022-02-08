"use strict"

let btnCargar = document.querySelector("#btn-cargar").addEventListener("click", cargar);

let btnPromediar = document.querySelector("#btn-promedio").addEventListener("click", function(e){
    document.querySelector("#resultado").innerHTML = "el promedio de las notas es: " + promediar();
});

let output = document.querySelector("#output");
let arregloNotas = [];

function cargar(){
    arregloNotas.push(document.querySelector("#input").value);

    mostrar();
}

function mostrar(){
//muestra el arreglo.
    output.innerHTML = "";

    for(let elem of arregloNotas){
        output.innerHTML += "<li>" + elem + "</li>";
    }
}

function promediar(){
    var suma = 0;

    for(let elem of arregloNotas){
        suma = Number(suma) + Number(elem);
    }

    return (suma / arregloNotas.length);
}