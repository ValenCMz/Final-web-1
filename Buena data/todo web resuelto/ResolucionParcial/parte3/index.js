"use strict"

const TEMP = 20;
let url = 'www.climamundo.com/api/temperaturas';

let btnAgregar = document.querySelector("#btn").addEventListener('click', agregar)

mostrar();

async function mostrar() {
    try {
        let response = await fetch(url);
        let json = await response.json();

        for (const elem of json) {
            if(elem.temperatura < TEMP){
                console.log("Anios en que la temperatura fue menor a 20 grados: ");
                console.log(temperatura);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function agregar(e){
    e.preventDefault();
  
  let temperaturas = {
      "id": document.querySelector("#id").value,
      "ciudad": document.querySelector("#ciudad").value,
      "pais": document.querySelector("#pais").value,
      "temperatura": document.querySelector("#temperatura").value,
      "anio": document.querySelector("#anio").value
  };

    try {
        
        let res = await fetch(url, {
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(temperaturas)
        });

        let json = await res.json();

        console.log(json);

    } catch (error) {

        console.log("Error: "+ error);
    }

}


