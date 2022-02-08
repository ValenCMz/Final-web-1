"use strict"

const url = "https://60ca879d772a7600172062c4.mockapi.io/telas";

document.querySelector("#btnBorrar").addEventListener("click",borrarTelas);

async function borrarTelas(){
    
    let telasABorrar = document.querySelector("#inputBorrar").value;

    try {
        let res = await fetch(url);
        let json = await res.json();

        console.log("hace el get ");
        if(res.ok){
            for (const tela of json) {
                for (const estampado of tela.estampado) {
                    if (estampado == telasABorrar) {

                        console.log(`estampado: ${estampado}`);
                        console.log("ID: " + tela.id);
                        
                        borrar(tela.id);
                    }
                }
            }
            console.log("SALIO CON EXITO DEL GET-DELETE!!!")
        }
    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL");
    }
}

async function borrar(id){

    try {
        let res = await fetch(`${url}/${id}`,{
            "method": "DELETE"
        })
        let json = await res.json();

        if (res.ok) {
            console.log("ELIMINADO CON EXITO!!!");
            console.log(json);
        }
    } catch (error) {
        console.log("NO SE PUDO ACCEDER AL BORRAR ID DE LA URL");
    }
}