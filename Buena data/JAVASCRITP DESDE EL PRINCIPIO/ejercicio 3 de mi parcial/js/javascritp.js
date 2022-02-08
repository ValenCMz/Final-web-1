// Una concesionaria de Chevrolet desea implementar una página que tenga los siguientes requisitos y prestaciones:

// 1. Debe permitir cargar automóviles mediante un formulario. 
// Para cada vehículo se debe poder cargar modelo, color, precio, si tiene aire acondicionado o no.

// 2. Con dos botones distintos se debe poder hacer un listado con el detalle de los vehículos que tienen aire acondicionado 
//y otro los vehículos que no.

// 3.  Con un botón se deben poder resaltar con un color los vehículos con aire acondicionado.

// Implementar el código HTML, CSS y JS necesario. Adjuntar un archivo comprimido y TAMBIEN copiar los tres archivos en el cuadro de texto. 
// Los datos deben manejarse a nivel local (no se requiere de un servicio)

"use strict"

let auto = document.querySelector("#automovil");
let modelo = document.querySelector("#modelo");
let colordelauto = document.querySelector("#color");
let preciodelauto = document.querySelector("#precio");

document.querySelector("#boton-aire-si").addEventListener("click", AgregarAire);
document.querySelector("#boton-aire-no").addEventListener("click", AgregarSinAire);
let select = document.querySelector("#seleccionar");


let autosSinAire = [{
    automovil: "ford",
    modelo: "fiesta",
    color: "negro",
    precio: "2500"
}]

let autosAire = [{
    automovil: "fiat",
    modelo: "siena",
    color: "azul",
    precio: "500"
}];

function AgregarAire(){
    let selectValor= select.value;
    
    let vehiculo = auto.value;
    let model = modelo.value;
    let color = colordelauto.value;
    let precio = preciodelauto.value;


    let autos = {
        automovil: vehiculo,
        modelo: model,
        color: color,
        precio: precio
    };
    if(selectValor=="TieneAire"){
        autosAire.push(autos);    
        mostrarSitieneAire();
        console.table(autosAire);
    }
}

function AgregarSinAire(){
    let selectValor= select.value;
    
    let vehiculo = auto.value;
    let model = modelo.value;
    let color = colordelauto.value;
    let precio = preciodelauto.value;


    let autos = {
        automovil: vehiculo,
        modelo: model,
        color: color,
        precio: precio
    };
    if(selectValor=="NoTieneAire"){
        autosSinAire.push(autos);    
        mostrarSiNotieneAire();
        console.table(autosSinAire);
    }
}

function mostrarSitieneAire(){
    let selectValor= select.value;
    let lista = document.querySelector("#listado");
    if(selectValor=="TieneAire"){
    lista.innerHTML = '';
    for (const elementoActual of autosAire) {
        listado.innerHTML += `<li>${elementoActual.automovil} ${elementoActual.modelo} ${elementoActual.color} ${elementoActual.precio}</li>`;
        }
    }
}

function mostrarSiNotieneAire(){
    let selectValor= select.value;
    let lista = document.querySelector("#listado2");
    if(selectValor=="NoTieneAire"){
    lista.innerHTML = '';
    for (const elementoActual of autosSinAire) {
        listado2.innerHTML += `<li>${elementoActual.automovil} ${elementoActual.modelo} ${elementoActual.color} ${elementoActual.precio}</li>`;
        }
    }
}