/*Una concesionaria desea implementar una página que tenga los siguientes requisitos y prestaciones:

1. Debe permitir cargar automóviles mediante un formulario.  Para cada vehículo se debe poder cargar modelo, color, precio, marca, año.

2. Con un botón se debe poder filtrar y mostrar solo los vehículos mas nuevos a cierto año ingresado en un input.

3.  Resaltar con un color los vehículos de la marca "Chevrolet" y precio menor a $1000000.

Implementar el código HTML, CSS y JS necesario. Adjuntar un archivo comprimido y TAMBIEN copiar los tres archivos en el cuadro de texto. 
- Los datos deben manejarse a nivel local (no se requiere de un servicio)
- Los datos que sean numéricos solo deben permitir numeros*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
  let btnCargar = document.querySelector("#btnCargar");
  btnCargar.addEventListener("click", function (e) {
    e.preventDefault();
    cargarAutomoviles();
  });
  let btnFiltrar = document.querySelector("#btnFiltrar");
  btnFiltrar.addEventListener("click", function (e) {
    e.preventDefault();
    let anio = document.querySelector("#aAnio").value;
    anio = Number(anio);
    filtrarNuevosAAnio(anio);
  });

  let automoviles = [];

  function filtrarNuevosAAnio(anio) {
    let nuevos = [];
    for (let automovil of automoviles) {
      if (automovil.anio > anio) {
        nuevos.push(automovil);
      }
    }
    mostrarNuevosAAnio(nuevos, anio);
  }

  function mostrarNuevosAAnio(nuevos, anio) {
    let listaNuevos = document.querySelector("#listaNuevos");
    listaNuevos.innerHTML = "";
    listaNuevos.innerHTML = `Automóviles nuevos a año ${anio}: `;
    for (let auto of nuevos) {
      let item = document.createElement("li");
      listaNuevos.appendChild(item);
      item.innerHTML = `${auto.modelo} - ${auto.color} - ${auto.precio} - ${auto.marca} - ${auto.anio}`;
    }
  }

  function cargarAutomoviles() {
    console.log(automoviles);
    let modelo = document.querySelector("#modelo").value;
    let color = document.querySelector("#color").value;
    let precio = document.querySelector("#precio").value;
    let marca = document.querySelector("#marca").value;
    let anio = document.querySelector("#anio").value;

    let nuevoAutomovil = {
      modelo: modelo,
      color: color,
      precio: precio,
      marca: marca,
      anio: anio,
    };

    automoviles.push(nuevoAutomovil);
    console.log(automoviles);
    console.log(nuevoAutomovil);
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    for (let auto of automoviles) {
      let item = document.createElement("li");
      lista.appendChild(item);
      item.innerHTML = `${auto.modelo} - ${auto.color} - ${auto.precio} - ${auto.marca} - ${auto.anio}.`;
      if (auto.marca == "Chevrolet" && auto.precio < 1000000) {
        item.classList.add("resaltado");
      }
    }
  }
}
