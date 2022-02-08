"use strict"

function processText(t) {
// esta funcion procesa el funcionamiento de los botones que vienen dentro del html traido.
    let container = document.querySelector("#use-ajax");
    //agrego al DOM
    container.innerHTML = t;
    //busco sobre lo que agregué y agrego evento
    container.querySelectorAll(".js-comportamiento")
              .forEach(b=> b.addEventListener("click", loadClick));
}
  
let btn = document.querySelector(".js-load").addEventListener("click", loadClick);


function loadClick(e){
    e.preventDefault();
    
    let contenedor = document.querySelector("#use-ajax");
    contenedor.innerHTML = "Cargando...";
    let promise = fetch("http://web-unicen.herokuapp.com/api/html");
    
    promise.then((response) => {console.log(response)
    //llamo a una funcion arrow con parametro response. que es el objeto que trae el fetch
    if (response.ok) { //ok devuelve el codigo de status. si este es 200 entonces encontro la pagina.
        console.log("OK"); 
        
        response.text().then(processText);
     } else
        contenedor.innerHTML = "<h1>Error - Failed URL!</h1>"; // en caso de que la url este mal ingresada
    })
    
    //.then(response.text().then(text => {contenedor.innerHTML = text})); // text() parsea el contenido a tipo text) 
    //NO FUNCA
    
    .catch(error => {
        console.log(error);
        contenedor.innerHTML = "<h1>Error - Fallo la conexion!</h1>";
})}