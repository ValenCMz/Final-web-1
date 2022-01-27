"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';

    document.querySelector("button").addEventListener('click', postData);

    async function postData() {

        let data = {
            "sede": document.getElementById("js-sede").value,
            "aprobados": document.getElementById("js-aprobados").value,
            "desaprobados": document.getElementById("js-desaprobados").value,
            "anio": document.getElementById("js-anio").value
        }

        try {
            let r = await fetch(baseURL, {
                "method": "POST",
                "mode": 'cors',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(data)
            });
            let json = await r.json();
            let contenedor = document.querySelector("#result");
            contenedor.innerHTML = "Se guardo el registro correctamente! REGISTRO:" + JSON.stringify(json);
        } catch (e) {
            console.log(e)
        }
    }

});