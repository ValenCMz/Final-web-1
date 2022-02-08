"use strict"

async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; //llama a url
    const lista = document.querySelector("#datos"); //posicion en que se escriben los datos
    lista.innerHTML = "";
    try {
        let res = await fetch(url); // GET url por default
        let json = await res.json(); // texto json a objeto
        console.log(json);
        for (const usuario of json) {
            
            lista.innerHTML += `<li> User ID: ${usuario.userId} ID: ${usuario.id} Title: ${usuario.title}</li>
                                <li> Body: ${usuario.body}</li> <br>`;
        }
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();