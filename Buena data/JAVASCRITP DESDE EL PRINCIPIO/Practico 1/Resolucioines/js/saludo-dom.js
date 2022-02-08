 let nombre = prompt("ingrese su nombre");

 console.log(nombre);

 let edad = prompt("ingrese su edad");
 console.log(edad);

 let saludar = document.querySelector("#saludo");
 saludar.innerHTML = "Hola " + nombre + " usted cuenta con la edad de " + edad + " años "; 
 