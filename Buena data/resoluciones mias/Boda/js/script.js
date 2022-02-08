// Para guardar la lista de invitados a una boda se utilizará un servicio REST.
//  Se incorporará un formulario que armará la lista de invitados,
//   y permitirá indicar los datos del invitado (nombre, apellido, dni).
// El servicio REST tiene por URL www.juanypepewedding.com/api/invitados
// y devuelve un objeto JSON de la siguienteforma:
// let casamiento = {
// "novios": "juan y pepe",
// "invitados": [
// { "nombre": date, "apellido": time, "edad": 66 },
// { "nombre": date, "apellido": time, "edad": 1 },
// { "nombre": date, "apellido": time, "edad": 23 },
// ]
// }
// //Date, time y dni son valores particulares en cada objeto
// Escriba el código JS para:
// 1
// Mostrar la cantidad de invitados menores de 5 años en un párrafo (que tiene ID "cant-invitados-menores")
// 2
// Insertar un invitado en el objeto JSON 
// (los objetos de cada invitado son iguales a los que devuelve el servicio)

const url = www.juanypepewedding.com/api/invitados;
let invitadosMenores = 5;

document.querySelector("#BtnCantidadInvitados").addEventListener("click", MostrarInvitados);

async function MostrarInvitados(){
// Mostrar la cantidad de invitados menores de 5 años en un párrafo (que tiene ID "cant-invitados-menores");

    let res = await fetch(url);
    let json = await res.json();

    let lista = document.querySelector("#cant-invitados-menores");

    if(res.ok){
        for (const element of json.invitados) {
            if(element.edad < invitadosMenores){
                lista.innerHTML += `<li> nombre: ${element.nombre}, apellido: ${element.apellido}, edad:${edad}"</li>"`;
            }
        }
    }
}

document.querySelector("#BtnAgregarInvitados").addEventListener("click", AgregarInvitados);

async function AgregarInvitados(){

    let nombre = document.querySelector("#inputNombre").value;
    let apellido = document.querySelector("#inputApellido").value;
    let edad = document.querySelector("#inputEdad").value;


    let invitados = {
        "nombre": nombre,
        "apellido": apellido,
        "edad": edad 
    }  

    try {
        let res = await fetch(url,{
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(invitados)
        });

        let json = await res.json();  
        if(res.ok){
            console.log(json);
        }

    } catch (error) {
        
    }

}

