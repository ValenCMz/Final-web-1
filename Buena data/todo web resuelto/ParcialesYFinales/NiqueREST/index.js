"use strict"

let url = "www.nique.com/api/cupones";

async function mostrar(){
    const lista = document.querySelector("#lista_cupones"); //posicion en que se escriben los datos
    lista.innerHTML = "";

    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);
        for (const cupon of json) {
            if(cupon.usos.length < cupon.maxusos)
                lista.innerHTML += `<ul>Cupon: ${cupon.cupon} - ${cupon.maxusos} disponibles</ul>`
        }
        if(res.ok){
            console.log(`se mostraron correctamente los datos!`);
        }else{
            console.log(`no se pudieron mostrar los datos!`)
        }

    } catch (error) {
        console.log("Error: " + error);
    }
}

mostrar();


document.querySelector("#obtener").addEventListener("click", obtener);

async function obtener(e){
    e.preventDefault();

    const lista = document.querySelector("#lista_cupones"); //posicion en que se escriben los datos
    lista.innerHTML = "";

    const nombreCupon = documen.querySelector("#campoNombreCupon").value;

    try {
        let res = await fetch(`${url}/${nombreCupon}`);
        let json = await res.json();
        console.log(json);

        if(res.ok)
            {
            lista.innerHTML += `<ul>Cupon: ${cupon.cupon} - ${cupon.maxusos} disponibles</ul>`;
            console.log(`se encontro el cupon!`);
            }else
            {console.log(`no se encontro el cupon!`);}

    } catch (error) {
        console.log("Error: " + error);
    }
}
