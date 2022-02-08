"use strict"

let facturas = [];

let btnAgregar = document.querySelector("#btncargar").addEventListener("click", (e)=>{
    e.preventDefault();

    let objeto = {
        "tipo" : document.querySelector("#tipo").value,
        "descripcion" : document.querySelector("#descripcion").value,
        "nombre" : document.querySelector("#nombre").value,
        "importe" : document.querySelector("#importe").value
    }

    facturas.push(objeto);
    console.log(facturas);
})

let btnTotal = document.querySelector("#btntotal").addEventListener("click", (e)=>{
    e.preventDefault();
    let total = 0;
    for(let elem of facturas){
        total += Number(elem.importe);
    }
    document.querySelector("#totalfacturado").innerHTML = total;

})

let btnListarA = document.querySelector("#listarA").addEventListener("click", (e)=>{
    e.preventDefault();

    listarPorTipo("A");
})


let btnListarB = document.querySelector("#listarB").addEventListener("click", (e)=>{
    e.preventDefault();

    listarPorTipo("B");
})

function listarPorTipo(tipo){
    
    document.querySelector("#output").innerHTML += "";
    for(let elem of facturas){
        if(elem.tipo == tipo){
            document.querySelector("#output").innerHTML += `<li>Descripcion: ${elem.descripcion} Nombre: ${elem.nombre} Importe: ${elem.importe}</li>`
        }
        
    }
}