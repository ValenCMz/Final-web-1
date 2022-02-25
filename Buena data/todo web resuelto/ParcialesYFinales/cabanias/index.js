"use strict"

let cabanias = [
{
    "cabania":"cabania1",
    "espacio":10,
    "estado": "disponible",
    "nombre":""
},
{
    "cabania":"cabania2",
    "espacio":2,
    "estado": "disponible",
    "nombre":""
},
{
    "cabania":"cabania3",
    "espacio":5,
    "estado": "reservada",
    "nombre":"Alan Brito Delgado"
},
{
    "cabania":"cabania4",
    "espacio":1,
    "estado": "disponible",
    "nombre":""
},
{
    "cabania":"cabania5",
    "espacio":4,
    "estado": "reservada",
    "nombre":"Elsa Pato"
}
];

document.querySelector("#btnReservar").addEventListener("click",(e)=>{
    e.preventDefault();
    
    let cantPersonas = document.querySelector("#inputCantidad").value;
    let nombreReserva = document.querySelector("#inputNombre").value;
    let halloLugar = 0;
    let mostrar = document.querySelector("#mensaje");
    mostrar.innerHTML = "";

    for (const cabania of cabanias) {
        if(cabania.estado == "reservada"){
            mostrar.innerHTML += `<li>
            Cabania: ${cabania.cabania}, 
            Estado: ${cabania.estado}, 
            Nombre: ${cabania.nombre}, 
            Espacio: ${cabania.espacio}
            </li>`; 
        }
    }

    for (const cabania of cabanias) {
        if(cabania.estado == "disponible"){
            if(cabania.espacio >= cantPersonas){
                //aca hace la reserva.
                cabania.nombre = nombreReserva;
                cabania.estado = "reservada";
                halloLugar = 1;
                break;  //RE CONTRA RE MIL MALA PRACTICA PERO VALE XD.
            }
        }
    }

    if(halloLugar == 1){
        mostrar.innerHTML += "SE RESERVO CON EXITO!"
    }else{
        mostrar.innerHTML += `<h2 class="resaltado">NO SE ENCONTRO LUGAR DISPONIBLE!</h2>`
    }
})