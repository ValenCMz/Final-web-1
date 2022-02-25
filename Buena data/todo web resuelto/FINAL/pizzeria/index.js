"use strict"

document.querySelector("#btnCalcular").addEventListener("click", ()=>{

    let cantPizzas = document.querySelector("#inputPizzas").value;
    let cantEmpanadas = document.querySelector("#inputEmpanadas").value;

    let salida = document.querySelector("#pedido");
    salida.innerHTML = `EL PEDIDO ES: Docenas de Empanadas: ${cantEmpanadas} y Pizzas: ${cantPizzas}`;
    
    let sinDescuento = document.querySelector("#mostarSinDescuento");
    sinDescuento.innerHTML = `El Costo del pedido sin descuento es: ${cantEmpanadas*300 + cantPizzas*200}`;

    let promos = 0;
    while(cantPizzas > 0 && cantEmpanadas > 0){
        cantEmpanadas--;
        cantPizzas--;
        promos++;
    }
    
    let ConDescuento = document.querySelector("#mostrarConDescuento");
    ConDescuento.innerHTML = `El Costo del pedido con descuento es: ${cantEmpanadas*300 + cantPizzas*200 + promos*400}`; 
    
});