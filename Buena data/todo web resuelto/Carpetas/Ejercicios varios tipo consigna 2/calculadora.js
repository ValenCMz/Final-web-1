"use strict";
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("calcular").addEventListener("click", calcular);
    document.getElementById("eliminar-historial").addEventListener("click", eliminarHistorial);

    function calcular() {
        let val1 = parseInt(document.getElementById('num1').value);
        let val2 = parseInt(document.getElementById('num2').value);

        let operator = document.forms[0];

        let resul = 0;

        for (let i = 0; i < operator.length; i++) {
            if (operator[i].checked) {
                if (operator[i].value == "+") {
                    resul = val1 + val2;
                }
                if (operator[i].value == "-") {
                    resul = val1 - val2;
                }
                if (operator[i].value == "*") {
                    resul = val1 * val2;
                }
                if (operator[i].value == "/") {
                    if (val2 == 0) {
                        resul = "No se puede dividir por 0";
                    } else {
                        resul = val1 / val2;
                    }

                }
                document.getElementById('lista-resultado').innerHTML += "<li>" + val1 + " " + operator[i].value + " " + val2 + " = " + resul + "</li>";
            }
        }
    }

    function eliminarHistorial() {
        document.getElementById('lista-resultado').innerHTML = "";

    }

});