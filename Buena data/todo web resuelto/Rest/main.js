"use strict";

let url = "https://60aab45166f1d000177731ea.mockapi.io/api/usuarios";


//GET
async function obtieneAlumnos() {
    try {
        let respuesta = await fetch(url);
        if(respuesta.status == 200){
            console.log("status 200");
            let arregloAlumnos = await respuesta.json();
            console.log(arregloAlumnos);

            for (const alumno of arregloAlumnos) {
                creaAlumno(alumno);
            }
        }else{
            console.log("Otro error");
        }
    } catch (error) {
        console.log(error);
    }
}

function creaAlumno(alumno) {
    let lista = document.querySelector("#listado-alumnos");
    let objeto = document.createElement("li");
    objeto.innerHTML = `${alumno.id} ${alumno.nombre} ${alumno.numero}`;
    lista.appendChild(objeto);
}

function creaObjeto() {
    let nombre = document.querySelector("#nombre").value;
    let numero = Number(document.querySelector("#numero").value);

    let objeto = {
        "nombre": nombre,
        "numero": numero
    }
    console.log(objeto);
    return objeto
}


// POST
async function añadeAlumno() {
    let objeto = creaObjeto();
    try {
        let respuesta = await fetch(url, {
            "method": "POST",
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
}

//DELETE
async function eliminarAlumno() {
    let idEliminar = document.querySelector("#id").value;
    try {
        let respuesta = await fetch(url + "/" + idEliminar, {
            "method": "DELETE",
        })
        if(respuesta.ok){
            console.log("fue 200");
        }else if(respuesta.status == 201){
            console.log("fue 201");
        }else{
            console.log("otro error");
        }
    } catch (error) {
        console.log(error);
    }
}

//PUT
async function modificarAlumno() {
    let idModificar = document.querySelector("#id").value;
    let objeto = creaObjeto();

    try {
        let respuesta = await fetch(url + "/" + idModificar, {
            "method": "PUT",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(objeto)
        })
        if(respuesta.ok){
            console.log("fue 200");
        }else if(respuesta.status == 201){
            console.log("fue 201");
        }else{
            console.log("otro cosa");
        }
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#form").addEventListener("submit", function (e) {
    e.preventDefault();
    //añadeAlumno();
    //eliminarAlumno();
    modificarAlumno();
})

document.querySelector("#mostrar").addEventListener("click", obtieneAlumnos);

document.querySelector("#vaciar").addEventListener("click", function () {
    document.querySelector("#listado-alumnos").innerHTML = "";
})
