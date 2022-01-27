"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){

    // Defino URL
    let baseURL = "https://www.playita.com/api/cocheras";

    // 1 Escriba una función que permita encontrar la cochera asociada a la patente URL231 (o cualquier otra que se pase como parámetro) y la imprima por consola.  
    
    async function buscarNumCochera(){
        let numPatente = document.getElementById('num-patente');
        let numeroCochera = document.getElementById('numero-cochera');
        try{
            let res = await fecth(baseURL);
            let json = await res.jon();
            console.log(json);
            
            for (const auto of json.cocheras){
                if (auto.patente = numPatente){
                    numeroCochera.innerHTML = auto.cochera;
                }
            }   
        }catch(error){
            console.log(error);
            numeroCochera.innerHTML = error;
        }
    }

    document.getElementById('buscar-cochera').addEventListener("click", buscarNumCochera);

    // 2 Insertar una cochera leida desde el HTML. 

    async function agregarAuto(){
        let patente = document.getElementById('patente');
        let cochera = parseInt(document.getElementById('cochera').value);
        let carpa = parseInt(document.getElementById('carpa').value);

        let newDato = {
            "patente": patente,
            "cochera": cochera,
            "carpa": carpa
        }

        try{
            let res = await fetch(baseURL, {
                "method": "POST",
                "headers": {"Content-type:": "application/json"},
                "body": JSON.stringify(newDato)
            });
            if (res.status === 201){ // éxito
                document.getElementById('resultado').innerHTML = "Se agregó el auto con éxito!";
            }
        }catch(error){
            console.log(error);
        }
    }

    document.getElementById('agregar-auto').addEventListener("click", agregarAuto);
    
}

    




