"use strict"

const url = 'https://60ca879d772a7600172062c4.mockapi.io/productos';

document.querySelector("#boton").addEventListener('click',editData)

async function editData(){  

  let NuevoProducto = {
      "imagen": document.querySelector("#imagen").value,
      "producto": document.querySelector("#nombre").value,
      "descripcion":document.querySelector("#descripcion").value,
      "precio": Number(document.querySelector("#precio").value)
  };

  let id = Number(document.querySelector("#id").value);

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "PUT", //PUT me permite ingresar un nuevo dato en el server.
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(NuevoProducto)//convierte el objeto en texto para enviarlo al server.
        });
        let json = await res.json();
        
        obtenerDatos();
        
        console.log(json);
    } catch (error) {
        console.log("Error: "+ error);
    }

}


async function obtenerDatos() {
  const lista = document.querySelector("#result"); //posicion en que se escriben los datos
  lista.innerHTML = "";
  try {
      let res = await fetch(url); // GET url por default
      let json = await res.json(); // texto json a objeto
      console.log(json);
      for (const producto of json) {
          
          lista.innerHTML += `<li> ID: ${producto.id} Imagen: ${producto.imagen} 
                              Producto: ${producto.producto}, Descripcion: ${producto.descripcion}, 
                              Precio: ${producto.precio}, </li>`;
      }
  } catch (error) {
      console.log(error);
  }
}

obtenerDatos();