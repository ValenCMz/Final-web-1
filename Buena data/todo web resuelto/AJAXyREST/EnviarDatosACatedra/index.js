"use strict"

let contenedor = document.querySelector("#result");

async function sendData(){
  //---------------------------------------------------- si el campo nombre esta vacio no sigue. retorna un mensaje 
  let name = document.querySelector("#name").value;
  if( name.length === 0 ) { 
    contenedor.innerHTML = "Ingrese un nombre";
    return;
  }
//-------------------------------------------------------
  let nombres = {
      "nombre": name,
      "numero": 1
  };
  const url = 'https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres';
  //mi propia cuenta de mockAPI es la que esta ingresada en la url.

    try {
        let res = await fetch(url, {
            "method": "POST", //POST me permite ingresar un nuevo dato en el server.
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(nombres)//convierte el objeto en texto para enviarlo al server.
        });
        let json = await res.json();

        console.log(json);
    } catch (error) {
        console.log("Error: "+ error);
    }

}

document.querySelector("button").addEventListener('click', sendData)

//USAR "thing" PARA ALMACENAR CUALQUIER OBJETO  EN EL ARREGLO.