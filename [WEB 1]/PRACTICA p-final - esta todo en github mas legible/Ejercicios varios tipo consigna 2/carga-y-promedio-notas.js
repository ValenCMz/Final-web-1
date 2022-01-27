"use strict";
document.addEventListener("DOMContentLoaded", function () {

    let materias = [];

    document.getElementById("cargar-notas").addEventListener("click", cargarMaterias);
    document.getElementById("calcular-promedio").addEventListener("click", calcularPromedio);

    function cargarMaterias() {

        let materia = {
            "nombre": document.getElementById("materia").value,
            "nota": document.getElementById("nota").value,

        };

        materias.push(materia);

        document.getElementById("lista-notas").innerHTML = "";

        for (let i = 0; i < materias.length; i++) {
            let nodo = document.createElement("li");
            nodo.innerHTML = "MATERIA: " + materias[i].nombre + "      NOTA: " + materias[i].nota;
            document.getElementById("lista-notas").appendChild(nodo);
        }

    }


    function calcularPromedio() {
        let promedio = 0;

        for (let i = 0; i < materias.length; i++) {
            promedio += parseInt(materias[i].nota);
        }

        promedio = promedio / materias.length;

        document.getElementById("promedio-notas").innerHTML = promedio;
    }

});