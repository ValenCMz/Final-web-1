"use strict"
let inputTiempo = document.querySelector("#tiempo");
let cuentaRegresiva  = document.querySelector("#cuenta-regresiva");
let activar  = document.querySelector("#btn-activar").addEventListener("click", activarCuenta);

function activarCuenta(){
    alert("CORRA, se iniciara la cuenta regresiva en 5 segundos");
    setTimeout(iniciarCuentaRegresiva, 5000);
}

function iniciarCuentaRegresiva(){
    let valorInicial = inputTiempo.value;
    let intervalo = setInterval(function() {
        cuentaRegresiva.innerHTML = valorInicial; 
        if(valorInicial!=0){
            valorInicial--;
        }else{
            clearInterval(intervalo);
            cuentaRegresiva.innerHTML = "BOOOOOOM!"; 
        }
    }, 1000);
}