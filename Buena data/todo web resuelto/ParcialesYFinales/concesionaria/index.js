"use strict"

let autos = [
    {
        "marca":"Subaru",
        "modelo": "Impresa",
        "anio": 2010,
        "precio service": 20100
    },
    {
        "marca":"Rover",
        "modelo": "400",
        "anio": 1998,
        "precio service": 19980 
    },
    {
        "marca":"Volswagen",
        "modelo": "Passat",
        "anio": 2011,
        "precioService": 20110 
    }
]

document.querySelector("#cargar").addEventListener("click", (e)=>{
    e.preventDefault();

    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let anio = document.querySelector("#anio").value;

    if(marca != "" && modelo != "" && anio != ""){
        let auto = {
            "modelo": modelo,
            "marca": marca,
            "anio": Number(anio),
            "precioService": Number(anio*10)
        }

        autos.push(auto);
        console.log(autos);
    }
    else
    { 
        console.log("COMPLETE TODOS LOS CAMPOS!!!!")
    }
    
})

document.querySelector("#listarMayores").addEventListener("click",(e)=>{
    e.preventDefault();

    for (const auto of autos) {
        if(auto.precioService > 19960){
            console.log(auto);
        }
    }
})