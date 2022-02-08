// 3) Implementar un sistema de carga de vacantes en una empresa,
// donde la empresa puede cargar las posiciones en las que está buscando nuevos empleados.
// Se deben ingresar en una página la posición y la cantidad de vacantes en dicha posicion. 
// El listado de posiciones debe mostrarse en el HTML. Se deben cumplir los siguientes requisitos:

// 1. La empresa debe poder introducir la descripción (un texto corto) y el numero de posiciones abiertas.
// 2. Se debe ir mostrando en un listado las posiciones abiertas.
// 3. El total de posiciones publicadas no debe poder superar 20 posiciones.
//  Se debe mostrar un error en la página en dicho caso.

document.addEventListener("DOMContentLoaded", function () {


document.querySelector("#BtnCargaDeVacantes").addEventListener("click", cargarVacantes);

let vacantes = [];

function cargarVacantes(){
    
    let posicion = {
        "posicion": document.querySelector("#inputPosiciones").value,
        "descripcion":  document.querySelector("#inputDescripcion").value,
        "vacantes": document.querySelector("#inputCantidadDeVacantes").value
    };
    if(vacantes.length <= 20){
        vacantes.push(posicion);
        
        document.querySelector("#listaAbierta").innerHTML = "";

        for (let i = 0; i < vacantes.length; i++) { 
            let nodo = document.createElement("li");
            nodo.innerHTML = `Posicon: ${vacantes[i].posicion}, Descripcion: ${vacantes[i].descripcion}, Vacantes: ${vacantes[i].vacantes}`;
            document.getElementById("listaAbierta").appendChild(nodo);
        }

    }
    else{
        lista.innerHTML += "<h3> ERROR: LIMITE DE 20 POSICIONES ALCANZADO </H3>";
    }


}

});