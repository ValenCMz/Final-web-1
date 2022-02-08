"use strict"

let btns = document.querySelectorAll('.btn');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
  let el = this.nextElementSibling;     //.this hace referencia en este caso al elemento siguiente al boton que se le asigna el evento
  el.classList.toggle("ver");  //nextElementSibiling busca el elemento siguiente al .btn 
  });
}  


// y si quiero borrar elementos??? USO ESTO
// document.querySelectorAll("li").forEach(x=> x.remove())


/* Otra forma: Itero con for of */
/*
let items = document.querySelectorAll("li");
for(let item of items){
  item.remove()
}
*/

//COMO APLICAR UN EVENTO A VARIOS ELEMENTOS IGUALES:

//let parrafos = document.querySelectorAll("p");
//parrafos.forEach(p => p.addEventListener("click", SetSelected))