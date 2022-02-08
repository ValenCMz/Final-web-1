"use strict"

const MAX = 36;

let salida = document.getElementById("valor-ruleta");
let resultado = document.getElementById("resultado");
let btn = document.getElementById("lanzar");

btn.addEventListener("click",valorGenerado);

function generarValor() {
    return (Math.floor(Math.random() * MAX));
}

function verificar(entrada){
    if(entrada.value == salida.innerHTML)
        {return ("acertaste!");}
    else
        {return ("la has cagao");}
}

function valorGenerado(){
    let entrada = document.getElementById("valor-entrada");
    salida.innerHTML = generarValor();
    //los contenedores input llevan value...no innerHTML.
    resultado.innerHTML = verificar(entrada);
}