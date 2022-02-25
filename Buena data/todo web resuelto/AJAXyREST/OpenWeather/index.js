"use strict"

async function obtenerDatos() {
    const url = 'api.openweathermap.org/data/2.5/forecast?id=524901&appid='; //llama a url
    const lista = document.querySelector("#datos"); //posicion en que se escriben los datos
    lista.innerHTML = "";
    try {
        let res = await fetch(url); // GET url por default
        let json = await res.json(); // texto json a objeto
        console.log(json);
        for (const usuario of json) {
            
            lista.innerHTML += `<li> ID: ${usuario.id} Nombre: ${usuario.nombre} Numero: ${usuario.numero}</li>`;
        }
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();