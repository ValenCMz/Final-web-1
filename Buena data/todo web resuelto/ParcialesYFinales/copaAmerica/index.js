"use strict"

const url = "aca va la url que se quiera usar"

document.querySelector("btnObtener").addEventListener("click", obtener);

async function obtener(){
    //SE OBTIENEN LOS DATOS DE UN EQUIPO DETERMINADO.
    let equipoBuscado = document.querySelector("#inputEquipo").value;

    try {
        let res = await fetch(url);
        let json = res.json();
        
        if(res.ok){
        
            for (const equipo of json) {
                if(equipo.nombre == equipoBuscado){
                    console.log(`
                    Nombre: ${equipo.nombre}, 
                    Partidos Jugados: ${equipo.partidos.lenght},
                    Puntos Acumulados: ${(equipo.partidos.ganados * 3) + equipo.partidos.empatados },
                    Lista de Rivales: ${equipo.rivales}`)
                }
        }
        console.log(`Cantidad de equipos cargados hasta el momento: ${json.lenght}`);
    }

    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL")
    }
}

document.querySelector("#btnborrar").addEventListener("click", borrar);

async function borrar(){
    //BORRA UN EQUIPO PASADO POR INPUT 
    let equipoABorrar = document.querySelector("inputEquipoABorrar").value;

    try {
        let res = await fetch(`${url}/${equipoABorrar}`,{
            "method":"DELETE"}
        )

        if(res.ok){
            console.log("SE BORRO CON EXITO");
            console.log(json);
        }
    } catch (error) {
        console.log("NO SE PUDO ACCEDER A LA URL");
    }
}