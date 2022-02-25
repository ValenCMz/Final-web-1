"use strict"

let clientes = [];
let mayorPedido = 0;

let btnCargar = document.querySelector("#btncargar").addEventListener("click", (e) => {
    e.preventDefault();

    let cliente = {
        "nombre": document.querySelector("#nombre").value,
        "ancho":  document.querySelector("#ancho").value,
        "largo": document.querySelector("#largo").value,
        "cantbolsas": document.querySelector("#ancho").value * document.querySelector("#largo").value *2
    }
    clientes.push(cliente);
    
    if(mayorPedido < cliente.cantbolsas){
        mayorPedido = cliente.cantbolsas;
    }
})

let btnMostrar = document.querySelector("#btnmostrar").addEventListener("click", (e) => {
    e.preventDefault();

    let salida = document.querySelector("#output");
    salida.innerHTML = "";
    for (const elem of clientes) {
        if(elem.cantbolsas == mayorPedido){
            salida.innerHTML += `<li class="resaltado">Nombre: ${elem.nombre} Ancho: ${elem.ancho} Largo: ${elem.largo} CantBolsas: ${elem.cantbolsas}</li>`        
        }else
        salida.innerHTML += `<li>Nombre: ${elem.nombre} Ancho: ${elem.ancho} Largo: ${elem.largo} CantBolsas: ${elem.cantbolsas}</li>`
    }
})

let btnTotal = document.querySelector("#btntotal").addEventListener("click", (e)=>{
    e.preventDefault();

    let contador = 0;
    for (const elem of clientes) {
        contador += elem.cantbolsas;
        
    }
    
    document.querySelector("#totalbolsas").innerHTML =` Total de Bolsas solicitadas: ${contador}`;
})
