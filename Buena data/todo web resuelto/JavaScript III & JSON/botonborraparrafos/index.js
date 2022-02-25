"use strict"

let btn = document.querySelector("#borrador").addEventListener("click", function(e){
    
    let parrafos = document.querySelectorAll("p");

    if(parrafos.length > 0){
        parrafos[parrafos.length-1].remove();
    }else if(parrafos.length <= 0){
        alert("ya no quedan mas parrafos");
    }

    console.log(parrafos);
})
