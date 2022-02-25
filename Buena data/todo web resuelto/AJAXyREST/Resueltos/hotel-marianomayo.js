document.addEventListener("DOMContentLoaded", iniciarPagina);


function iniciarPagina(){

  
    let baseURL = "http://hoteles.com/ocupacion"
     
     function obtenerHoteles(){
         fetch(baseURL)
         .then(response => response.json())
         .then(hoteles => mostrarHoteles(hoteles))
         .catch(error => console.log(error));
    }
    let body = document.getElementById("tbody"); //elijo donde voy a traer los datos


    function mostrarHoteles(hoteles){
        limpiarTabla(); //evitamos que se duplique la informacion
        for(let elems of hoteles){
            if(elems.ocupacion >= 50){
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                td1.innerHTML = elems.nombre;
                td2.innerHTML = elems.fecha;
                if(elems.ocupacion > 75){
                    td3.innerHTML = elems.ocupacion;
                    td3.classList.add("estiloRojo");
                }else{
                    td3.innerHTML = elems.ocupacion;
                }
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                body.appendChild(tr);
            }
        }

       
    }
     

    function limpiarTabla(){
        body.innerHTML="";
    }


    let nombreHotel = document.getElementById("nombreHotel");
    let fechaHotel = document.getElementById("fechaHotel");
    let ocupacion = document.getElementById("ocupacion");

    function addHoteles(){
        arregloEnviado = {            
            "nombre": nombreHotel.value,     
            "fecha":  fechaHotel.value,
            "ocupacion": ocupacion.value
        }
        fetch(baseURL, {
            "method": "POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(arregloEnviado)
        })
        .then(response => response(json))
        .then(function (){
            obtenerHoteles();
        })
        .catch(function (e){
            console.log(e)
        })
    }



}