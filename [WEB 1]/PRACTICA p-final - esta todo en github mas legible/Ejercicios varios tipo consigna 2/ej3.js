"use strict";
document.addEventListener("DOMContentLoaded", function () {

    let facturas = [];

    document.querySelector("#cargarFactura").addEventListener("click", cargarFactura);
    document.querySelector("#mostrarFacturas").addEventListener("click", mostrarFacturas);
    document.querySelector("#totalFacturado").addEventListener("click", calcularTotal);

    function cargarFactura() {

        let factura = {
            "tipo": document.getElementById("tipo").value,
            "descripcion": document.getElementById("descripcion").value,
            "nombre": document.getElementById("nombre").value,
            "precio": document.getElementById("total").value,
        };

        facturas.push(factura);

    }

    function mostrarFacturas() {

        document.getElementById("listaSalida").innerHTML = "";
        let mostrartipo = document.getElementById("mostrartipo").value;

        for (let i = 0; i < facturas.length; i++) {
            if (facturas[i].tipo == mostrartipo) {
                let nodo = document.createElement("li");
                nodo.innerHTML = "Factura tipo " + facturas[i].tipo + " , descripcion: " + facturas[i].descripcion + " , nombre: " + facturas[i].nombre + " , precio: " + facturas[i].precio;
                document.getElementById("listaSalida").appendChild(nodo);
            }
        }
    }

    function calcularTotal() {
        let total = 0;
        for (let i = 0; i < facturas.length; i++) {
            total += parseInt(facturas[i].precio);
        }
        console.log(total);
        document.getElementById("facturado").innerHTML = total;

    }

})