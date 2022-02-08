"use strict"

let descuentos = [];

let btn = document.querySelector("#btndescuento").addEventListener("click", (e)=>{
    e.preventDefault();

    let valor = document.querySelector("#numero").value;
    let valorRandom = Math.floor(Math.random()* 10) ;
    let descuento;

    console.log(valorRandom);

    if(valor < 11 && valor > 0 && valor !=""){
        
    if(valor == valorRandom){
        descuento = 50;
    
    }else {if(valor < valorRandom){
        descuento = 10;
    }else{
        descuento = 20;
    }}
    descuentos.push(descuento);
    document.querySelector("#resultado").innerHTML = `SU DESCUENTO ES DE: ${descuento}%!!!`;

    mostrar();
}else
    alert("EL NUMERO INGRESADO DEBE ESTAR ENTRE 1 Y 10!!!");
});

function mostrar(){
    let listaDescuentos = document.querySelector("#listadescuentos");
    listaDescuentos.innerHTML = ""; 

    for (const elem of descuentos) {
        listaDescuentos.innerHTML += `<li>${elem}%</li>` 
    }
}