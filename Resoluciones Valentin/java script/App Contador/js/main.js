"use strict"

//funciones anonimas
document.querySelector('#btn-icrementar').addEventListener('click', function(e){
    incrementarOdecrementar(1);
});
document.querySelector('#btn-decrementar').addEventListener('click', function (e){
    incrementarOdecrementar(-1);
});
document.querySelector('#btn-agregar').addEventListener('click', incrementarManual);

let numeroDePasos = 0;

function incrementarOdecrementar(pasos){
    numeroDePasos += pasos;

    document.querySelector('.pasos').innerHTML = numeroDePasos;
}

function decrementarUno(){
    let pasos = document.querySelector('.pasos');
    numeroDePasos = numeroDePasos -1;
    pasos.innerHTML = numeroDePasos;
}

function incrementarManual(){
    let valueManual = document.querySelector('#input-pasos').value;
    let pasos = parseInt(valueManual);
    
   incrementarOdecrementar(pasos);
}
