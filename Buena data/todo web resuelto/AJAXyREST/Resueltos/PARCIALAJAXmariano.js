"use strict"

document.addEventListener("DOMContentLoaded", function() {

    let baseUrl = 'https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres'; //endpoint
    let tbody = document.getElementById("tbody");
    let ingreso = document.getElementById("ingreso");

    function obtenerDatos() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(nombres => mostrarNombres(nombres))
            .then(error => console.log(error))
    }

    function mostrarNombres(datos) {
        limpiarTabla();

        for (let elems of datos.nombres) {
            let botonBorrar = document.createElement("button");
            botonBorrar.innerHTML = "Borrar";
            let nodoTr = document.createElement("tr");
            let nodoTd = document.createElement("td");
            let nodotd2 = document.createElement("td");
            let nodoTd3 = document.createElement("td");
            nodoTr.id = elems._id;
            nodoTd.innerHTML = elems._id;
            nodotd2.innerHTML = elems.thing.nombre;
            botonBorrar.addEventListener("click", e => eliminar(elems._id))
            nodoTd3.appendChild(botonBorrar);
            nodoTr.appendChild(nodoTd);
            nodoTr.appendChild(nodotd2);
            nodoTr.appendChild(nodoTd3);
            tbody.appendChild(nodoTr);
        }
    }

    function agregarElemento() {
        let data = {
            "thing": {
                "nombre": ingreso.value
            }
        }
        fetch(baseUrl, {
                "method": "POST", //agregamos
                "mode": 'cors', //es un protocolo 
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(data)
            }).then(function(r) {
                if (r.ok) {
                    return r.json()
                } else {
                    console.log("error")
                }
            })
            .then(function() {
                obtenerDatos()
            })
            .catch(function(e) {
                console.log(e)
            })
    }

    function eliminar(id) {
        fetch(baseUrl + "/" + id, {
                "method": "DELETE", //ELIMINAMOS
                "mode": 'cors', //es un protocolo 
            }).then(function(r) {
                if (r.ok) {
                    return r.json()
                } else {
                    console.log("error")
                }
            })
            .then(function() {
                obtenerDatos()
            })
            .catch(function(e) {
                console.log(e)
            })
    }

    function limpiarTabla() {
        tbody.innerHTML = "";
    }
    obtenerDatos();
    document.getElementById("agregar").addEventListener("click", agregarElemento);
})