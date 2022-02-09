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

    let materia = [{
        materia: nombre,
        nota: nota
    }];

    materias.push(materia);

    for (let i = 0; i < materia.length; i++) {
        lista_notas.innerHTML += "<li>" + " " + "MATERIA" + " " + materia[i].materia + " " + "NOTA" + " " + materia[i].nota + " " + "</li>"
    }
}

function calcularPromedio(){

    for (let i= 0; i < materias.length; i++){
        console.log(materias[i]);

        console.log(materias[i].nota);
   

    }
}

