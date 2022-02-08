"use sctrict"

let btnAgregar = document.querySelector("#Agregar").addEventListener("click", function(e){
    e.preventDefault();
    let input = document.querySelector("#input");

    if(input.value != ""){
        document.querySelector("#galeria").innerHTML += `<img src="images/${input.value}.jpg">`;
    }
    
    // Búsqueda de todas las imagenes del HTML.
    let imagenes = document.querySelectorAll("img");
// asignación de evento a todos los elementos

for(let i = 0; i < imagenes.length; i++) {

    console.log("entra al for de la imagen " + i);

    imagenes[i].addEventListener("click", function(e){

        e.preventDefault();

        console.log("agrega el estilo a la imagen " + i);
        
        imagenes[i].classList.toggle("agrandar");
    });
}

})


//NO AGREGA EL ESTILO CUANDO CLICKEO LA IMAGEN.