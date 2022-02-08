// implementar un servicio de estacionamiento.
// Utilizar el servicio de REST para almacenar la informacion
// En una seccion del estacionamiento los veraneantes podran ingresar su vehiculo para reservar
// un lugar entre los 20 disponibles

//1)Escriba una funcion que permita encontrar la cochera asociada a la patente URL231
// (o cualquier otra que se pase por parametro) y la imprima por consola

const url = "www.playita.com/api/cocheras";

document.querySelector("#btnBuscar").addEventListener("click", BuscarPatente);

async function BuscarPatente (){
    
    let valorPatente = document.querySelector("#inputPatente").value;

    try{
        let response = await fetch(url);
        let json = await response.json();

        if(response.ok){
            for (const elemento of json) {//vamos a buscar lugar por lugar la patente
                if(elemento.patente == valorPatente){
                    console.log(elemento);
                }
            }
        }
    }
    catch (error){
        console.log("ERROR: NO SE PUDO ACCEDER A LA URL");
    }
}

document.querySelector("#BtnAgregar").addEventListener("click", AgregarCoche);

async function AgregarCoche (){

    let patente = document.querySelector("#valorPatente").value;
    let cochera = document.querySelector("#valorCochera").value;
    let carpa = document.querySelector("#valorCarpa").value;

    let AutoNuevo = {
        "patente" : patente,
        "cochera" : cochera,
        "carpa" : carpa
    },

    try {
        let response = await fetch(url,{
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(AutoNuevo),
        })
        let json = await res.json();

        if(response.status){
            console.log("LA COCHERA FUE AGREGADA CON EXITO!");
            console.log(json);
        }

    } catch (error) {
        console.log("ERROR: NO SE PUDO ACCEDER A LA URL");
    }

}