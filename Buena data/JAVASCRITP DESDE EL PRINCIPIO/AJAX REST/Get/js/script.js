const url = "https://60da54db5f7bf10017547a86.mockapi.io/prueba";
let id = 0;


async function obtenerDatos(){
    let lista = document.querySelector("#listado");
    lista.innerHTML = "";
    try {
        let response = await fetch(url); //fetch hace get por defecto
        if((response.ok)||(response.status == 200)){
        let json = await response.json(); //texto json a objeto
        console.log(json);
        for (const usuarios of json) {
            let nombre = usuarios.name;
            let apellido = usuarios.apellido;
            let numero =usuarios.numero;
            id= usuarios.id
            lista.innerHTML += `<ul> ${nombre}, ${apellido}, ${numero}</ul>`
        }   
    }else
        lista.innerHTML = "error";
    } catch (error) {
        console.log(error);
    }
}
obtenerDatos();


//agrego de a 1
async function enviaDato(){
    let nombre = document.querySelector("#txtnombre").value;
    let apellido = document.querySelector("#txtapellido").value;
    let numero = document.querySelector("#txtnumero").value;

    let usuario = {
        "name": nombre,
        "apellido": apellido,
        "numero": numero
    }

    try {
        let response = await fetch(url, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(usuario) 
        });
        if(response.status === 201){
            document.querySelector("#lista-nombre").innerHTML = "Creado!"
        }      
    } catch (error) {
        console.log(error);
    }
}

async function borrarUltimo(){
    try {
        let response = await fetch(`${url}/${id}`, {
            "method": "DELETE", 
        });
        if(response.status === 200){
            document.querySelector("#lista-nombre").innerHTML = "Eliminado con exito!"
        }      
    } catch (error) {
        console.log(error);
    }
}

async function modificarUltimo(){
    let nombre = document.querySelector("#txtnombre").value;
    let apellido = document.querySelector("#txtapellido").value;
    let numero = document.querySelector("#txtnumero").value;

    let usuario = {
        "name": nombre,
        "apellido": apellido,
        "numero": numero
    }
    
    try {
        let response = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(usuario) 
        });
        if(response.status === 200){
            document.querySelector("#lista-nombre").innerHTML = "Modificado!"
        }      
    } catch (error) {
        console.log(error);
    }
}

let boton = document.querySelector("#button").addEventListener("click", enviaDato);
let botonBorrar = document.querySelector("#Borrar").addEventListener("click", borrarUltimo);
let botonModificar = document.querySelector("#modificar").addEventListener("click", modificarUltimo);