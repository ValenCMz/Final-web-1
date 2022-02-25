"use strict"

let equipo = [];

let btn = document.querySelector("#btnagregar").addEventListener("click",(e)=>{
    e.preventDefault();

    let jugador = {
        "nombre": document.querySelector("#jugador").value,
        "posicion": document.querySelector("#posicion").value
    }

    if(equipo.length < 11){
        equipo.push(jugador);
        mostrar();
    }else
        {alert("YA HAY 11 JUGADORES!!!")}
    
})

function mostrar(){

    let jugadores = document.querySelector("#jugadores");
    jugadores.innerHTML = "";

    for (const elem of equipo) {
        if(elem.posicion == "arquero"){
            jugadores.innerHTML += `<tr class="resaltado"><td>${elem.nombre}</td><td>${elem.posicion}</td></tr>`;
        }else
        {jugadores.innerHTML += `<tr><td>${elem.nombre}</td><td>${elem.posicion}</td></tr>`};
    }
}