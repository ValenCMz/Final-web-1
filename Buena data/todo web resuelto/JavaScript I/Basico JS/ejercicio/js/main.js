alert("este saludo se ejecuta ni bien carga la pagina");
console.log("se ejecuto un alert");

let saludo = "hola mundo en una variable";
alert(saludo);
console.log("se ejecuta el saludo con variable");

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
console.log("se ingreso correctamente el nombre y el apellido");

let newparrafo = document.querySelector("#parrafo");
newparrafo.innerHTML = "hola " + nombre + " " + apellido;
console.log("cambio de parrafo en HTML con JS exitoso");

let bloque1 = document.querySelector("#div1");
bloque1.innerHTML = "hola " + nombre + " " + apellido;
console.log("cambio de bloque 1 en HTML con JS exitoso");

let bloque2 = document.querySelector("#div2");
bloque2.innerHTML = "hola " + nombre + " " + apellido;
console.log("cambio de bloque 2 en HTML con JS exitoso");

let bloque3 = document.querySelector("#div3");
bloque3.innerHTML = "hola " + nombre + " " + apellido;
console.log("cambio de bloque 3 en HTML con JS exitoso");

function myfunction(x){
    document.getElementById("evento click").innerHTML = "hola " + nombre;
  }

function myfunction2() {
    alert("presionaste una tecla dentro del campo de texto");
  }

function myfunction3(x){
    x.style.background = "yellow";
}

function myfunction4() {
    let x = document.getElementById("eleccion").value;
    document.getElementById("demo").innerHTML = "Seleccionaste la Marca: " + x;
}

function myfunction5(){
    document.getElementById("evento5").innerHTML = "presionaste el boton 1";
}

function myfunction6(){
    document.getElementById("evento5").innerHTML = "presionaste el boton 2";
}

function myfunction7(){
    document.getElementById("evento5").innerHTML = "presionaste el boton 3";

}