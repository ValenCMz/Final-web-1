"use strict"

let contenedor = document.querySelector("#result");

async function sendData(){
 
  let tipoTela = document.querySelector("#imagen").value;
  let precioMetro = document.querySelector("#nombre").value;
  let estampadoTela = ["boca","gato","raton"];//document.querySelector("#descripcion").value;
  let colorTela = document.querySelector("#precio").value;
  

  let NuevoProducto = {
      "tipo": tipoTela,
      "precioMetro": precioMetro,
      "estampado":estampadoTela,
      "color": colorTela
  };

  const url = 'https://60ca879d772a7600172062c4.mockapi.io/telas'; //llama a url
  //mi cuenta de mockAPI es la que esta ingresada en la url.

    try {
        let res = await fetch(url, {
            "method": "POST", //POST me permite ingresar un nuevo dato en el server.
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(NuevoProducto)//convierte el objeto en texto para enviarlo al server.
        });
        let json = await res.json();

        console.log(json);
    } catch (error) {
        console.log("Error: "+ error);
    }

}

document.querySelector("button").addEventListener('click', sendData)