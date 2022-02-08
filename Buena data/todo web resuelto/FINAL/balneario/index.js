"use strict"

const url = "www.playita.com/api/cocheras";

let btnBuscar = document.querySelector("#btnBuscar").addEventListener("click",buscar);

async function buscar(){
//ESTA FUNCION BUSCA UNA COCHERA PASADA POR INPUT Y LA MUESTRA POR CONSOLA. tomando la patente del vehiculo como input.

    let cocheraBuscada = document.querySelector("#inputCochera").value;

    try {
        let res = await fetch(url);
        let json = await res.json();

        if(res.ok){
            for (const cochera of json) {
                if (cochera.patente == cocheraBuscada) {
                    console.log(cochera);
                }
            }
        }
    } catch (error) {
        console.log(`ERROR: NO SE PUDO ACCEDER A LA URL`);
    }
}

let btnAgregar = document.querySelector("#btnAgregar").addEventListener("click",agregar);

async function agregar(){
// ESTA FUNCION AGREGA UNA NUEVA COCHERA AL BALNEARIO.
    let cocheraNueva = {
        "patente": document.querySelector("#inputPatente").value,
        "cochera": document.querySelector("#inputCochera").value,
        "carpa": document.querySelector("#inputCarpa").value,
    }

    try {
        let res = await fetch(url,{
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(cocheraNueva),
        })
        let json = await res.json();

        if(res.status){
            console.log("LA COCHERA FUE AGREGADA CON EXITO!");
            console.log(json);
        }
    } catch (error) {
        console.log("ERROR: NO SE PUDO ACCEDER A LA url");
    }
}