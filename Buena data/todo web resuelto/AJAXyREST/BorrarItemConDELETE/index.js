"use strict"

async function deleteData(){

  let id = document.querySelector("#id").value;
  
//------------------------------------------------------

  const url = 'https://60ca879d772a7600172062c4.mockapi.io/productos';
  //mi cuenta de mockAPI es la que esta ingresada en la url.

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "DELETE", 
        });
        let json = await res.json();

        console.log(json);
    } catch (error) {
        console.log("Error: "+ error);
    }
}

document.querySelector("#boton").addEventListener('click', deleteData)

/*

async function borrarUltimo(){

  try {
    //'https://60ca879d772a7600172062c4.mockapi.io/api/prueba/usuario/123'
    let res = await fetch(`${url}/${id}`,{
      "method": "DELETE",
      //"headers": {"Content-type":"application/json" },
      //"body": JSON.stringify(usuario)
    });
    if (res.status === 200){
      document.querySelector("#mensaje").innerHTML = "Eliminado!";
    }

  } catch (error) {
    console.log(error);
  }
}
 */