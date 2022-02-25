"use strict"

const url = 'https://60ca879d772a7600172062c4.mockapi.io/productos';
let id = 0;

async function obtenerDatos(){
  const lista = document.querySelector("#result");
  lista.innerHTML = "";
  
  try {
      let res = await fetch(url) //GET url
      let json = await res.json();//texto json a objeto
      console.log(json);
      for (const usuario of json) {
        id = usuario.id;
        lista.innerHTML += `<ul>Nombre: ${usuario.nombre}, Numero: ${usuario.numero}, ID: ${id}</ul>`;
      }
  } catch (error) {
    console.log(error);
  }
}

async function enviarDato(){
  let nombre = document.querySelector("#nombre").value;
  let numero = document.querySelector("#numero").value;
  
  let usuario = {
    "nombre": nombre,
    "numero": numero
  }

  try {
    //'https://60ca879d772a7600172062c4.mockapi.io/api/prueba/usuario'
    let res = await fetch(`${url}`,{
      "method": "POST",
      "headers": {"Content-type":"application/json" },
      "body": JSON.stringify(usuario)
    });
    if (res.status === 201){
      document.querySelector("#mensaje").innerHTML = "Insertado!";
    }

  } catch (error) {
    console.log(error);
  }
}

//--------------------------------DELETE RECURSO-------------------------------
async function borrarUltimo(){

  try {
    //'https://60ca879d772a7600172062c4.mockapi.io/api/prueba/usuario/123'
    let res = await fetch(`${url}/${id}`,{
      "method": "DELETE",
      //"headers": {"Content-type":"application/json" },
      //"body": JSON.stringify(usuario)
    });
    if (res.status === 200){
      document.querySelector("#mensaje").innerHTML = "Eliminado!";
    }

  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#button").addEventListener("click", enviarDato);
document.querySelector("#borrar").addEventListener("click", borrarUltimo);

obtenerDatos();