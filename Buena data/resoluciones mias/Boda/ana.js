"use strict";
document.addEventListener("DOMContentLoaded", function () {

    let baseURL = 'https://www.juanypepewedding.com/api/invitados';
    let coll = 'casamiento';
    let edadMenores = 5;

    document.getElementById("btn-agregar-invitado").addEventListener('click', postInvitado);
    document.getElementById("btn-buscar-menores").addEventListener('click', getMenores);

    async function postInvitado() {
        let invitado = {
            'nombre': document.getElementById("js-nombre").value,
            'apellido': document.getElementById("js-apellido").value,
            'edad': document.getElementById("js-edad").value,
        }

        try {
            let r = await fetch(baseURL + "/" + coll, {
                "method": "POST",
                "mode": 'cors',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(invitado)
            });
            let json = await r.json();
            let guardado = document.getElementById("se-guardo");
            guardado.innerHTML += "<p> Se guardo correctamente el invitado: " + JSON.stringify(json) + "</p>";
        } catch (e) {
            console.log(e)
        }
    }

    async function getMenores() {
        try {
            let r = await fetch(baseURL + "/" + coll + "/invitados", {
                "method": "GET",
                "mode": 'cors',
            });
            let json = await r.json();
            let listaResul = document.getElementById("cant-invitados-menores");

            for (let inv of json.invitados) {
                if (inv.edad <= edadMenores) {
                    listaResul.innerHTML +=
                        "<li>" +
                        "nombre: " + inv.nombre +
                        "apellido: " + inv.apellido +
                        "edad" + inv.edad +
                        "</li>" +
                        "</br>";
                }
            }

        } catch (e) {
            console.log(e)
        }
    }



});