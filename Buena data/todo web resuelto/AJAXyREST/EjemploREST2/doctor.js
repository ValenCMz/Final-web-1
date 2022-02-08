"use strict"

let baseUrl = 'https://60ca0b5a772a760017205238.mockapi.io/api/turnos'; // sitio que contiene los datos que voy a usar
let parrafo = document.querySelector("#parrafo");

function obtenerDatos() {
	fetch(baseUrl)
	.then(response => response.json())
	.then(pacientes => mostrarTurnos(pacientes))
	.then(error => console.log(error));
}

function mostrarTurnos(datos) {

	let suma=0;
	for (let elems of datos) {
		for(let pacient of elems.pacientes){
			console.log(pacient);
			suma++;

		}
	}
	parrafo.innerHTML="la suma es " + suma;
}


  function crearTurno() {   //crea el objeto que se va a insertar en la lista.

    let objeto = {
        "nombre": document.querySelector("#nombre").value,
        "apellido": document.querySelector("#apellido").value,
        "turno": Number(document.querySelector("#turno").value),
    }
    console.log(objeto);
    return objeto;
}

document.querySelector("#btn-añadir").addEventListener("click",agregarPaciente);

async function agregarPaciente() {
    let objeto = crearTurno();
    try {
        let respuesta = await fetch(baseUrl, {
            "method": "POST", //POST  sirve para crear un nuevo recurso.
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(objeto)
        })
        if(respuesta.ok){
            console.log("http 200");
        }else if(respuesta.status == 201){
            console.log("http 201");
        }else{
            console.log("http error");
        }

    } catch (error) {
        console.log(error);
    }

    obtenerDatos();

}
