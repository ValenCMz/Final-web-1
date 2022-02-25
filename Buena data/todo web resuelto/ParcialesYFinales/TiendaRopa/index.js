"use strict"

let inventario = {
    "ropa":[{
                "categoria":"camisas",
                "precio":3000,
                "stock":2
            },
            {
                "categoria":"tangas",
                "precio":200,
                "stock":5
            },
            {
                "categoria":"pantalones",
                "precio":1200,
                "stock":10
            }
    ]
}
//---------------------------------------------------------------------------------
let btn = document.querySelector("#boton").addEventListener("click",(e)=>{
    e.preventDefault();

    let objeto = {
        "categoria": document.querySelector("#categoria").value,
        "precio": document.querySelector("#precio").value,
        "stock": document.querySelector("#cantidad").value

    }

    inventario.ropa.push(objeto);
    console.log(inventario);
})
//---------------------------------------------------------------------------------
let btn2 = document.querySelector("#buscar").addEventListener("click", (e)=>{
    e.preventDefault();
    
    for(let elem of inventario.ropa){
        if(elem.stock < 5){
            console.log(elem.categoria + "tiene menos de 5 articulos disponibles");
        }
    }
    
})