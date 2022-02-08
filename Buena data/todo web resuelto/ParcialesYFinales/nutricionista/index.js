"use strict"

let pacientes = 
[
    {"nombre":"Carlos Perez",
    "anterior": 120,
    "actual":110,
    "diferencia": 10},
    
    {"nombre":"Georgina Lopilato",
    "anterior": 90,
    "actual":70,
    "diferencia": 20},

    {"nombre":"Jhoanna Gonzales",
    "anterior": 70,
    "actual":71,
    "diferencia":-1}
]

document.querySelector("#guardar").addEventListener("click", (e)=>{
    e.preventDefault();
    let paciente = {
        "nombre": document.querySelector("#paciente").value,
        "anterior": document.querySelector("#anterior").value,
        "actual": document.querySelector("#actual").value,
        "diferencia": document.querySelector("#anterior").value - document.querySelector("#actual").value
    }
    pacientes.push(paciente);
    mostrar();
})

document.querySelector("#btn-ganador").addEventListener("click", (e)=>{
    e.preventDefault();

    let ganador = {"diferencia": 0} // despues se pisa todo el objeto completo

    for (const paciente of pacientes) {
        if(ganador.diferencia < paciente.diferencia){
            ganador = paciente;
        }
    }

    document.querySelector("#ganador").innerHTML = "";
    document.querySelector("#ganador").innerHTML = `GANADOR: ${ganador.nombre}, con ${ganador.diferencia} kilos bajados!`;
})

function mostrar(){
    document.querySelector("#pacientes").innerHTML = "";

    for (const paciente of pacientes) {
        if(paciente.diferencia > 0)
        {document.querySelector("#pacientes").innerHTML +=`
            <p class="bajo">Nombre: ${paciente.nombre}, Peso Actual: ${paciente.actual}, 
            Peso Anterior: ${paciente.anterior}, Diferencia: ${paciente.diferencia}`}
    else{ 
        document.querySelector("#pacientes").innerHTML +=`
            <p class="subio">Nombre: ${paciente.nombre}, Peso Actual: ${paciente.actual}, 
            Peso Anterior: ${paciente.anterior}, Diferencia: ${paciente.diferencia}`}
    }
}

mostrar();