"use strict"

let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e=> e.addEventListener("click", loadClick));// a cada boton le asigna un evento.


function loadClick(event) {
    event.preventDefault();

    let container = document.querySelector(".use-ajax");

    container.innerHTML = "<h1>Loading...</h1>";

    let response = fetch("http://web-unicen.herokuapp.com/api/html");
    response.then(response => {console.log(response);//llama a una promesa.
    
            if (response.ok) { //ok es igual a codigo de status 200
               console.log("OK");   
               response.text().then(processText);
            } else
               container.innerHTML = "<h1>Error - Failed URL!</h1>"; // en caso de que la url este mal ingresada
    })
        .catch(error => {
            console.log(error);
            container.innerHTML = "<h1>Error - Conection Failed!</h1>"; // en caso de que no haya internet o conexion con el server
        });
}  

function processText(t) {
    let container = document.querySelector(".use-ajax");
    container.innerHTML = t; 
    container.querySelectorAll(".js-comportamiento") //toma todos los botones dentro del conteiner
    .forEach(b=> b.addEventListener("click", function(){
        alert(" FUNCIONA EL BOTON INTERNO");
    }));//a cada boton le da un evento click
    }// usa ARROW FUNCTION para generar el evento



    //usar nextElementSibiling para anadir un evento al eleemento siguiente a el nombrado