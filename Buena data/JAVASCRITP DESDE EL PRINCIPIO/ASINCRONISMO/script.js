function crearBoton(nombre){
    let divBotones = document.querySelector("#botones");
    let btn = document.createElement("button");
    btn.innerHTML = "Boton " + nombre;
    divBotones.appendChild(btn);
}

document.querySelector("#btn-agregar").addEventListener("click",function(){
    let N = document.querySelector("#input").value;
    for(let i=0;i<N;i++){
        setTimeout(function(){crearBoton(i)}, Math.random()* 5000);
    }
});