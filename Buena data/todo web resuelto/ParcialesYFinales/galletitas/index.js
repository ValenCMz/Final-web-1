"use strict"

const url = "aca va la url de la api"

document.querySelector("#btnMostrar").addEventListener("click",mostrarPorFecha);

async function mostrarPorFecha(){
    let fechaBuscada = document.querySelector("#inputFecha").value;

    try {
        let res = await fetch(url);
        let json = res.json();

        if(res.ok){
            for (const cliente of clientes) {
                if(cliente.fecha == fechaBuscada){
                    console.log(cliente);
                }
            }
        }

    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL");
    }
}

document.querySelector("#btnAgregar").addEventListener("click", agregar);

async function agregar(){
    
    let cliente = {
        "dni": document.querySelector("#inputDni").value,
        "telefono":document.querySelector("#inputTelefono").value,
    }

    try {
        let res = await fetch(url,{
            "method": "POST",
            "headers": { "Content-type": "application/json"},
            "body": JSON.stringify(cliente)
        })
        let json = await res.json();

        if(res.ok){
            console.log(json);
        }       
    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL");
    }
}