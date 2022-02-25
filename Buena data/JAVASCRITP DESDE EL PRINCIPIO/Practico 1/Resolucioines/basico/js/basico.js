/*4.	Crear 3 botones de distinto color. Agregar la
 funcionalidad para que se muestre en un párrafo un mensaje que avise 
 cual de los botones fue el último cliqueado.
*/

let botonamarillo = document.querySelector("#boton-amarillo");  
botonamarillo.addEventListener("click", clickAmarillo);
let botonrojo = document.querySelector("#boton-rojo");  
botonrojo.addEventListener("click", clickrojo);
let  botonverde= document.querySelector("#boton-verde");  
botonverde.addEventListener("click", clickverde);

function clickAmarillo(){
    document.querySelector("#div1").innerHTML = "Se clickeo el boton amarillo";
}

function clickrojo(){
    document.querySelector("#div1").innerHTML = "Se clickeo el boton rojo";
}

function clickverde(){
    document.querySelector("#div1").innerHTML = "Se clickeo el boton verde";
}