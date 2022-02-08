"use strict"

let candidatos = [{"id":0,"nombre":"Carlitos","votos":0},{"id":1,"nombre":"Maurito","votos":0},{"id":2,"nombre":"EstebanQuito","votos":0},{"id":3,"nombre":"Pepito","votos":0}];

document.querySelector("#btnAgregar").addEventListener("click", (e)=>{
    e.preventDefault();

    let candidato = {
        "nombre": document.querySelector("#inputCandidato").value,
        "id":candidatos.length,
        "votos":0
}
    if(candidato.nombre != ""){
    candidatos.push(candidato)
    }else{
        alert("EL CAMPO DE CANDIDATO NO PUEDE ESTAR VACIO!");
    }
    mostrar();
})

document.querySelector("#btnComenzar").addEventListener("click", (e)=>{
    e.preventDefault();

    document.querySelector("#btnAgregar").classList.add("ocultar");
})

function mostrar() {
    let contenedor = document.querySelector("#mostrar");
    contenedor.innerHTML = ""; 
    let total = 0;
    for (const candidato of candidatos) {
        contenedor.innerHTML +=`<li>Candidato: ${candidato.nombre} - Votos:${candidato.votos} - <button id="${candidato.id}" class="btnVotar">votar</button></li>`;
        total += candidato.votos;
    }

    generarVotacion();

    document.querySelector("#total").innerHTML = "Total Votos: " + total;
}

function generarVotacion(){

    let btnsVotar = document.querySelectorAll(".btnVotar");
    btnsVotar.forEach(btn => {btn.addEventListener("click", ()=>{
      
        let id = btn.getAttribute("id");

        console.log(id);
        candidatos[id].votos++;
        mostrar();
    })
    });  
}