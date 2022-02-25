"use strict"

async function obtenerDatos() {
    const url = 'https://60aab45166f1d000177731ea.mockapi.io/api/usuarios'; //llama a url
    const lista = document.querySelector("#lista_nombres"); //posicion en que se escriben los datos
    lista.innerHTML = "";
    try {
        let res = await fetch(url); // GET url por default
        let json = await res.json(); // texto json a objeto
        console.log(json);
        for (const usuario of json) {
            
            lista.innerHTML += `<ul> ID: ${usuario.id} Nombre: ${usuario.nombre} Numero: ${usuario.numero}</ul>`;
        }
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();