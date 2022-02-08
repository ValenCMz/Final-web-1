"use strict"

let posicion = 0;// inicializo la posicion en la que arranca el arreglo
let arreglo = ["covid1","covid2","coviddeportes","crossfit","dogecoin","auriculares","cargador","chromecast","electronica","equipo","envios"];


let btnAnterior = document.querySelector("#btn-ant").addEventListener("click", function(){
    
    posicion--;
    if( posicion < 0)
        posicion = arreglo.length-1;// arranca del final.

    mostrar(posicion);

});// muestra la imagen anterior.
let btnSiguiente =  document.querySelector("#btn-sig").addEventListener("click", function(){


    if(posicion > arreglo.length-1 )
        posicion = 0 ; //arraca del principio

    mostrar(posicion++);

});//muestra la imagen siguiente.




function mostrar(posicion){
    console.log("imagen #"+ posicion);  
    document.querySelector("#imagen").innerHTML = "<img src=images/" + arreglo[posicion] +".jpg" + ">";    
}
