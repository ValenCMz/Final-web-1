"use strict"

document.querySelector("#btn-cargar").addEventListener("click", function(e){
cargarNota();
});

document.querySelector("#btn-calcular-promedio").addEventListener("click", function(e){
    calcularPromedio();
});

let materias = [];

let lista_notas = document.querySelector("#lista-notas");

function cargarNota(){
    let nombre =  document.querySelector("#materia").value;
    let nota = document.querySelector("#nota").value;

    let materia = {
        "materia": nombre,
        "nota": nota
    };

    materias.push(materia);

    lista_notas.innerHTML = "";

    for (let i = 0; i < materias.length; i++) {
        lista_notas.innerHTML += "<li>" + " " + "MATERIA: " + " " + materias[i].materia + " " + "NOTA: " + " " + materias[i].nota + " " + "</li>"
    }
}

function calcularPromedio(){

    let promedio =0;

    for (let i= 0; i < materias.length; i++){

        promedio += parseInt(materias[i].nota);
    }

    promedio = promedio/materias.length;

    document.querySelector("#lista-promedio").innerHTML = promedio;
    
}

