/*6. Cree una “Lista de Tareas” donde cada 
tarea se agrega desde un input de texto.*/

// document.querySelector("#boton").addEventListener("click", agregarTarea);

// function agregarTarea(){
//     let tarea = document.querySelector("#tarea").value;
//     const itemList = document.createElement('li');
//     itemList.textContent = tarea;
//     let lista = document.querySelector("#lista");
//     lista.appendChild(itemList);  
// }

/*7.	Crear un botón que al hacer click cambie el color de fondo de un div y agregue borde de 3px rojo.*/

document.querySelector("#button").addEventListener("click", cambiarFondo);

function cambiarFondo (){
    document.querySelector("#fondo").classList.toggle("fondo");
}
