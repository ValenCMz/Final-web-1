"use strict"

let btn = document.querySelector("#btnAgregar");
btn.addEventListener("click", agregar);

let btn2 = document.querySelector("#btnComprar");
btn2.addEventListener("click", sumar);

let compras = [];

function agregar() {
  console.log("Funcion Agregar");
  var producto = document.querySelector('#producto').value;
  var precioUnitario = parseInt(document.querySelector('#preciounit').value);
  var cant = parseInt(document.querySelector('#cant').value);
  
  var renglon = {
    "producto": producto,
    "preciounitario": precioUnitario,
    "cantidad": cant,
    "totalItem": precioUnitario*cant
  }
  compras.push(renglon);
}


function sumar() {
  console.log("Funcion Sumar");
  let total = 0;
  
  for (var i = 0; i <  compras.length; i++) {
    var r = compras[i];
    console.log(r);
    total += r.totalItem;
  }
  var max = compras[0].totalItem;
  for (var r of compras) {
    console.log(r)
    if(max <  r.totalItem)
      max = r.totalItem;
  }
  document.querySelector("#total").innerHTML =
    "Total: $" + total +
    "Maximo: $" + max;
}
