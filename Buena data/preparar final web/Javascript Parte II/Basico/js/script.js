// Reescriba el ejercicio 3 del Práctico 02 JS pero 
// utilizando funciones anónimas para poder pasar parámetros. 
// ¿Cuál de las dos maneras le parece mejor? 

// TP 2 Ejer 3: Crear 3 botones de distinto color. 
// Agregar la funcionalidad para que se muestre en un párrafo un 
// mensaje que avise cual de los botones fue el último cliqueado.
//-------------------------- ANTES-------------------------------
//1)
// Muestre una alerta al cargar una página
// Que sea un texto fijo
// Que sean dos variables nombre y apellido concatenadas, 
// mostrando en el mensaje: Nombre: (valor_nombre)  Apellido: (valor_apellido)
//--------------------
//2(
//Escribir un HTML con tres divs vacios (sin contenido) y 
// darle un texto desde Javascript (al cargar la pagina).
//  Reflexione entre las diferencias en hacerlo en HTML o en Javascript. 
// Es posible desde JS insertar diferentes párrafos adentro del div?
    
//resolucion 1)-------

// let nombre = "valentin";
// let apellido = " caminos";

// alert("texto fijo");
// alert(nombre + apellido);

//resolucion 2)------

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

div1.innerHTML = "Texto del div1";
div2.innerHTML = "Texto del div2";
div3.innerHTML = "Texto del div3";


