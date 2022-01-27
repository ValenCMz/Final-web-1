"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", calcular);
    document.getElementById("borrar-historial").addEventListener("click", borrarHistorial);
    let resultados = document.getElementById("resultados");

    function calcular() {
        let op1 = parseInt(document.getElementById("op1").value);
        let op2 = parseInt(document.getElementById("op2").value);
        let operacion = document.getElementById("operacion").value;
        let resul = 0;

        if (operacion == "+") {
            resul = op1 + op2;
        } else if (operacion == "-") {
            resul = op1 - op2;
        } else if (operacion == "*") {
            resul = op1 * op2;
        } else if (operacion == "/") {
            if (op2 != 0) {
                resul = op1 / op2;
            } else {
                resul = "No se puede dividir por cero papanatas!"
            }
        }
        resultados.innerHTML += "<li>" + op1 + " " + operacion + " " + op2 + " = " + resul + "</li>";
    }

    function borrarHistorial() {
        resultados.innerHTML = "";
    }
});