"use strict";

document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina(){

    //console.log('entra');

    // Precios de los productos
    let precioP = 200; 
    let precioE = 300;
    let precioPromo = 400;

    document.getElementById('calcular-precios').addEventListener("click", calculaPrecios);


    function calculaPrecios(){

        // Cantidad de productos que pide el usuario
        let cantPizzas = parseInt(document.getElementById('cant-pizzas').value); 
        let cantDocEmpanadas = parseInt(document.getElementById('cant-doc-empanadas').value); 
        let cantPromociones = 0; // todavía no sé si hay promociones
        let sinPromo = ''; // lo que no entra en la promoción!!

        // Calculo, en caso de que haya, las promociones
        if (cantPizzas > 0 && cantDocEmpanadas > 0){
            // Determino qué queda afuera de la promoción y la cantPromociones se asocia a la cant mayor entre los dos productos
            if (cantPizzas < cantDocEmpanadas){ 
                cantPromociones = cantPizzas;
                sinPromo = "empanadas";
            }else{
                cantPromociones = cantDocEmpanadas;
                sinPromo = "pizzas";
            }
        }

        // Calculo el precio SIN el descuento
        let precioSinDescuento = (cantPizzas * precioP) + (cantDocEmpanadas * precioE);
        document.getElementById('precio-sin-descuento').innerHTML = "$ " + precioSinDescuento;

        let precioConDescuento = 0; // el precio con descuento arranca en 0!!

        // Precio con descuento: precioPromo x cantPromociones + alguna de las otras dos (una de las dos daría 0)
        // Si fuesen iguales -> ambas dan cero y solamente cuento precioPromo x cantPromociones
        precioConDescuento = precioPromo*cantPromociones + precioP*(cantPizzas-cantPromociones) + precioE*(cantDocEmpanadas-cantPromociones) 

        // Diferencia de precio
        let diferencia = 0;
        if (precioConDescuento > 0){ // Si existe un descuento entra al if, sino no entra!!
            diferencia = precioSinDescuento - precioConDescuento; //  sin desc - con desc
        }
        document.getElementById('descuento').innerHTML = "$ " + diferencia;

        // Muestro el total del pedido
        let totalDelPedido = document.getElementById('total-pedido');
        if (precioConDescuento > 0) {
            totalDelPedido.innerHTML = "$ " + precioConDescuento;
        }else{
            totalDelPedido.innerHTML = "$ " + precioSinDescuento;
        }

    }



















}