"use strict"

async function obtenerDatos() {
    const url = 'https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres'; //guarda la url
    const lista = document.querySelector("#output"); //posicion en que se escriben los datos
    lista.innerHTML = "";
    try {
        let res = await fetch(url); // GET url por default. manda a llamar a la url.
        let json = await res.json(); // convierte texto json a un objeto.
        console.log(json);
        for (const usuario of json.nombres) {
            
            lista.innerHTML += `<li> ID: ${usuario._id}</li> 
                                <li> Group: ${usuario.group}</li>
                                <li> Thingtype: ${usuario.thingtype}</li> 
                                <li>Thing: </li>
                                <ul> 
                                    <li>Provincia: ${usuario.thing.provincia}</li> 
                                    <li>Año: ${usuario.thing.año}</li> 
                                    <li>MM: ${usuario.thing.mm}</li>
                                </ul>
                                <li> DateAdded: ${usuario.dateAdded}</li>
                                <br><br>`;
        }
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();