"use strict"

let arreglo = [];

let btn = document.querySelector("#boton").addEventListener("click", (e)=>{
    e.preventDefault();

    cargar(document.querySelector("#nombre").value,document.querySelector("#apellido").value,document.querySelector("#dni").value);
    
})

let btn2 = document.querySelector("#registradas").addEventListener("click", (e)=>{
    e.preventDefault();

    mostrar();
})

function cargar(nombre, apellido, dni){

    let objeto = {
        "nombre":nombre,
        "apellido":apellido,
        "dni":dni
    }
    arreglo.push(objeto);

}

function mostrar(){
   let output = document.querySelector("#mostrar");
    output.innerHTML = "";
    for(let elem of arreglo){
        output.innerHTML += `<li>Nombre: ${elem.nombre} Apellido: ${elem.apellido} DNI: ${elem.dni}</li>`;
    }
   output.innerHTML += `Cantidad de personas registradas hasta ahora: ${arreglo.length}`;
}