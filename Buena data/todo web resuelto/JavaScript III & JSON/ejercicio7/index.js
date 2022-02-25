"use strict"

let btns = document.querySelectorAll("#btn");

console.log("cantidad de botones en la pagina: " + btns.length);

for(let elem of btns){
    console.log(elem);
}

let parrafos = document.getElementsByClassName("parrafo");

console.log("cantidad de parrafos en la pagina: " + parrafos.length);