"use strict"

const url = "aca va la url que voy a usar";

mostrar();

async function mostrar(){
//muestra los invitados
    try {
        let res = await fetch(url);
        let json = res.json();

        if(res.ok){
            for (const invitado of json.invitados) {
                if(invitado.edad < 5){
                    console.log(invitado); //menores a 5 anios de edad.
                }
                
            }
        }
    } catch (error) {
        console.log("ERROR: NO SE PUDO ACCEDER A LA URL");
    }
}

document.querySelector("#btnAgregar").addEventListener("click", agregar);

async function agregar(){

    let nuevoInvitado = {
        "nombre": document.querySelector("#inputNombre").value,
        "apellido": document.querySelector("#inputApellido").value,
        "edad": document.querySelector("#inputEdad").value
    }

    try {
        let res = await fetch(url,{
            "method": "POST",
            "headers": {"Content-type":"application/json"},
            "body": JSON.stringify(nuevoInvitado)
        });
        let json = await res.json();
        if(res.ok){ 
            console.log(json);
        }

    } catch (error) {
        console.log("ERROR: NO SE PUDO ACCEDER A LA URL")
    }
}