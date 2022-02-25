"use strict"

const url = "aca va la url";

async function mostrar(){
    //MUESTRA TODAS LAS PELICULAS

    try {
        let res = await fetch(url);
        let json = await res.json();
        
        if(res.ok){
            console.log(json);
        }
        else{
            console.log("NO SE PUDIERON MOSTRAR LOS DATOS")
        }
    } catch (error) {
        console.log("NO SE PUDO OBTENER LOS DATOS DE LA URL")
    }
}


mostrar();

document.querySelector("#btnObtener").addEventListener("click", obtener);

async function obtener(){
    //MUESTRA LOS DATOS DE UNA PELICULA INGRESADA POR INPUT.

    let titulo = documen.querySelector("#inputObtener").value;

    try {
        let res = await fetch(`${url}/${titulo}`);
        let json = await res.json();
        
        if(res.ok){

            let promedio = 0;
            for (const voto of json.votos) {promedio += voto}

            promedio = promedio / json.votos.length;

            console.log(`Nombre: ${json.titulo} - Nro. Actores: ${json.resparto.length} - Promedio de Votos: ${promedio}`);
        }
        else{
            console.log("NO SE PUDIERON MOSTRAR LOS DATOS")
        }
    } catch (error) {
        console.log("NO SE PUDO OBTENER LOS DATOS DE LA URL")
    }
}


async function mostrarIngresado(){
    //MUESTRA TODAS LAS PELICULAS EN LAS QUE ACTUO UN ACTOR INGRESADO POR INPUT.
    
    let actorIngresado = document.querySelector("#inputAutor").value;

    try {
        let res = await fetch(url);
        let json = await res.json();
        
        if(res.ok){
            for (const pelicula of json) {
                for (const actor of pelicula.reparto) {
                    if( actorIngresado == actor){
                        console.log(pelicula);
                    }
                }
            }
            
        }
        else{
            console.log("NO SE PUDIERON MOSTRAR LOS DATOS")
        }
    } catch (error) {
        console.log("NO SE PUDIERON OBTENER LOS DATOS DE LA URL")
    }
}

document.querySelector("#boton").addEventListener('click', eliminarPelicula)

async function eliminarPelicula(){

    let peliculaEliminar = document.querySelector("#inputEliminar").value;
    
      try {
          let res = await fetch(`${url}/${peliculaEliminar}`, {
              "method": "DELETE", 
          });
          let json = await res.json();
          if(res.ok){
            console.log(`SE ELIMINO CON EXITO LA PELICULA INGRESADA`);
            console.log(json);
          }else{
            console.log(`NO SE PUDO ELIMINAR LA PELICULA INGRESADA`);
          }
          
      } catch (error) {
          console.log(`NO SE PUDO ACCEDER A LA URL O NO EXISTE`);
      }
}  
