"use strict"

let materiales = [
    {
        "nombre":"tornillos",
        "precio": 12,
        "marca": ""
    },
    {
        "nombre":"hierro",
        "precio": 200,
        "marca": ""
    },
    {
        "nombre":"madera",
        "precio": 100,
        "marca": ""
    },
    {
        "nombre":"madera torneada",
        "precio": 150,
        "marca": ""
    },
    {
        "nombre":"cosa marron",
        "precio": 2,
        "marca": ""
    },
    {
        "nombre":"otra cosa",
        "precio": 40,
        "marca": ""
    },
]

document.querySelector("#btnAgregar").addEventListener("click",(e)=>{
    e.preventDefault();

    let material = {
     "nombre" : document.querySelector("#inputMaterial").value,
     "precio" : document.querySelector("#inputPrecio").value
    }

    materiales.push(material);
    mostrar(0);
})

function mostrar(descuento){

    let salida = document.querySelector("#salida");
    salida.innerHTML = "";
    for (const material of materiales) {
        salida.innerHTML += `<li> 
        Material: ${material.nombre} 
        Precio: ${material.precio - (material.precio * (descuento / 100))}</li>`
    }
}

document.querySelector("#btnDescuento").addEventListener("click",(e)=>{
   //muestra el presupuesto con el descuento agregado.
    e.preventDefault();

    mostrar(document.querySelector("#inputDescuento").value);
})


document.querySelector("#btnMasCaros").addEventListener("click", (e)=>{
    //resalta los 3 mas caros
    e.preventDefault();
    
    let mostrar = document.querySelector("#salidaMasCaros");
    mostrar.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        let material = mayor();

        mostrar.innerHTML += `<li class="resaltado"> 
        Material: ${material.nombre} -
        Precio: ${material.precio}</li>`;
        console.log(`entro ${i} veces`);
}


})
function mayor() {

    let masCaro;
    let valor = 0;
    for (const material of materiales) {
        if(material.marca != "marcado" && valor < material.precio){
            
            valor = material.precio;
            
            masCaro = material;
            
        }
    }
    masCaro.marca = "marcado";
    return masCaro;
}