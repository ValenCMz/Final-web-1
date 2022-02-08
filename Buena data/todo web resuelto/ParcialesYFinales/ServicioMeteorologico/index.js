"use strict"

const url = "aca va la url del servicio REST"

document.querySelector("#btnObtener").addEventListener("click", obtener);

async function obtener(){

    let ciudadBuscada = document.querySelector("inputCiudad").value;
    
    try {
        let res = await fetch(url);
        let json = res.json();

        if(res.ok){
            for (const ciudad of json) {
                if(ciudad.nombre == ciudadBuscada){
                    let tempMaxima;
                    for (const temperatura of ciudad.temperaturas) {
                        if(temperatura.max > tempMaxima){
                            tempMaxima = temperatura.max;   //BUSCA LA TEMPERATURA MAXIMA
                        }
                    }

                    console.log(`Ciudad: ${ciudad.nombre}, Temperatura Maxima: ${tempMaxima}`) //IMPRIME LA CIUDAD Y SU TEMPERATURA MAXIMA SEMANAL
                    console.log(`CANTIDAD DE CIUDADES CARGADAS: ${json.length}`)
                }
            }
        }else{
            console.log("NO SE PUDO REALIZAR LA ACCION SOLICITADA");
        }

    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL")
    }
}

document.querySelector("#btnBorrar").addEventListener("click", borrar);

async function borrar(){

    let ciudadABorrar = document.querySelector("#inputBorrar").value;

    try {
        let res = await fetch(`${url}/ciudad=${ciudadABorrar}`,{
            "method":"DELETE"
        });
        let json = res.json();

        console.log(json);
    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL");
    }
}