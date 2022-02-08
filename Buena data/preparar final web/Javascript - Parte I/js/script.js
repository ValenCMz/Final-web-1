// Generar un script reutilizable que permita agrandar el tamaño de una imagen cuando posamos el mouse encima.


document.querySelector(".perro").addEventListener("onmouseover", agrandarElPerro);

function agrandarElPerro(){
    document.querySelector(".perro").classList.toggle("show");
}