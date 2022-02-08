"use strict";
document.addEventListener("DOMContentLoaded", function () {

    let vacantes = [];

    document.getElementById("cargar-posicion").addEventListener("click", cargarPosicion);

    function cargarPosicion() {
        let posicion = {
            "posicion": document.getElementById("posicion").value,
            "descripcion": document.getElementById("descripcion").value,
            "vacantes": document.getElementById("vacantes").value
        }

        if (vacantes.length < 20) {
            vacantes.push(posicion);

            document.getElementById("lista-posiciones").innerHTML = "";

            for (let i = 0; i < vacantes.length; i++) {
                let nodo = document.createElement("li");
                nodo.innerHTML = "Posicion: " + vacantes[i].posicion + " , descripcion: " + vacantes[i].descripcion + " , vacantes: " + vacantes[i].vacantes;
                document.getElementById("lista-posiciones").appendChild(nodo);
            }
        } else {
            document.getElementById("lista-posiciones").innerHTML += "<h3> ERROR: LIMITE DE 20 POSICIONES ALCANZADO </H3>";
        }
    }



});