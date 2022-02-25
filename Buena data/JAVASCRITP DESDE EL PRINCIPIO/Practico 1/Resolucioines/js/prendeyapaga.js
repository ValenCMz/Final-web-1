document.querySelector("#prender").addEventListener("click", prender);
document.querySelector("#apagar").addEventListener("click", apagar);

let lampara

apagar();

function prender(){
    //cambiar la foto
    let lamparaPrendida = document.querySelector("#img-lampara");
    lamparaPrendida.src = "images/lamparaON.png"
    //cambiar el fondo
    document.querySelector("#fondo").classList.add("prendido");
    document.querySelector("#fondo").classList.remove("apagado");

}

function apagar(){
    let lamparaPrendida = document.querySelector("#img-lampara");
    lamparaPrendida.src = "images/lamparaOFF.png"
    document.querySelector("#fondo").classList.add("apagado");
    document.querySelector("#fondo").classList.remove("prendido");
}