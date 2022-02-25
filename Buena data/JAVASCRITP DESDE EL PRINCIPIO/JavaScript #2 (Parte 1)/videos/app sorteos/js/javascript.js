
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-reset").addEventListener("click", resetear);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

let nombres = [];

function agregar (){
    let valornombre = document.querySelector("#nombre");
    let input = valornombre.value;
   
    nombres.push(input);
    console.log(nombres);

    mostrar();

    //vaciar input
    valornombre.value = " ";
}

function mostrar(){
    let lista = document.querySelector("#listado");
    lista.innerHTML = "";
    for (let elementoActual of nombres){
        lista.innerHTML += `<li>${elementoActual}</li>`
    }
}

function resetear(){
    nombres = [];
    mostrar();
}

function borrarUltimo(){
    nombres.pop();
    mostrar();
}

function sortear(){
    let random = Math.floor(Math.random() * nombres.length);
    
    let ganador = nombres[random];
    console.log(ganador);   
    document.querySelector("#ganador").innerHTML = ganador;
}