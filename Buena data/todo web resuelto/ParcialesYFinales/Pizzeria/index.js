"use strict"

let pedido = {
    "pizzas": 0,
    "empanadas": 0
}

let btnPizza = document.querySelector("#btnpizzas").addEventListener("click", (e)=>{
    e.preventDefault();

    pedido.pizzas++;
    mostrar();
    
})

let btnEmpanadas = document.querySelector("#btnempanadas").addEventListener("click", (e)=>{
    e.preventDefault();

    pedido.empanadas++;
    mostrar();
})


let btnCalcular = document.querySelector("#btncalcular").addEventListener("click", (e)=>{
    e.preventDefault();
    
    calcular();
})


function mostrar(){
    document.querySelector("#cantidad").innerHTML = `Cantidad de pizzas: ${pedido.pizzas}
                                                    Cantidad de docenas de empanadas: ${pedido.empanadas}`;
}

function calcular(){
    let pizzas = Number(pedido.pizzas);
    let empanadas = Number(pedido.empanadas);
    
    let promo = 0;
    while(pizzas !=0 && empanadas !=0){
        pizzas--;
        empanadas--;
        promo++
    }
    document.querySelector("#resultado").innerHTML = 
    `El total sin promo es: Pizzas:(${pedido.pizzas} * $200) + Doc.Empanadas:(${pedido.empanadas} * $300)
    = ${pedido.pizzas * 200 + pedido.empanadas * 300}`

    document.querySelector("#resultadoPromo").innerHTML = 
    
    `El total con promo es: (Pizzas: ${pizzas} * $200) + (Doc.Empanadas:${empanadas} * $300)
    + Promos: (${promo} * $400)  = ${promo * 400 + pizzas * 200 + empanadas * 300}`
}