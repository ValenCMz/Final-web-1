"use strict"

async function obtenerDatos() {
    const url = 'https://60ca879d772a7600172062c4.mockapi.io/productos'; //llama a url
    let boxTBody = document.querySelector("#filas-producto");
    boxTBody.innerHTML = "";
    try {
        let res = await fetch(url); // hace GET sobre la url, por default
        
        let json = await res.json(); // texto json a objeto
        
        console.log(json);
        
        for (const producto of json) {
            
            boxTBody.innerHTML += `<ul> imagen: ${producto.imagen} Nombre: ${producto.producto} 
                                descripcion: ${producto.descripcion} precio: ${producto.precio}</ul>`;
        }
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();