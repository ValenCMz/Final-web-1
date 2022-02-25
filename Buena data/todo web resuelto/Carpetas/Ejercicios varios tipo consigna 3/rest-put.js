"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
    let groupID = 'ejemplos';
    let collectionID = 'nombres';

    document.querySelector("button").addEventListener('click', sendData);

    async function sendData() {
        let id = document.querySelector("#id").value;
        let name = document.querySelector("#name").value;
        if (name.length === 0 || id.length === 0) {
            contenedor.innerHTML = "Ingrese un ID y nombre";
            return;
        }
        let data = {
            "thing": {
                "nombre": name
            }
        };
        try {
            let r = await fetch(baseURL + groupID + "/" + collectionID + "/" + id, {
                "method": "PUT",
                "mode": 'cors',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(data)
            });
            let json = await r.json();
            let contenedor = document.querySelector("#result");
            contenedor.innerHTML = JSON.stringify(json);
        } catch (e) {
            console.log(e)
        }
    }
});