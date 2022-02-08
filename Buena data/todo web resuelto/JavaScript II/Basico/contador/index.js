"use strict"
let contador1 = document.querySelector("#contador1");
let contador2 = document.querySelector("#contador2");
let contador3 = document.querySelector("#contador3");

document.querySelector("#btn1").addEventListener("click",()=>{
    
    agregarClick(contador1);
})

document.querySelector("#btn2").addEventListener("click",()=>{
    
    agregarClick(contador2);
})

document.querySelector("#btn3").addEventListener("click",()=>{
    
    agregarClick(contador3);
})


function agregarClick(variable){
    variable.innerHTML++;
}