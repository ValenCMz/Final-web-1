
    document.querySelector("#btn-1").addEventListener("click", agregar1);
    document.querySelector("#btn-2").addEventListener("click", agregar2);
    document.querySelector("#btn-3").addEventListener("click", agregar3);
    
    
let objetos = [{
    producto: "harina",
    cantidad: 1,
    },  
    {
    producto: "huevos",
    cantidad: 3,     
    }
];


function mostrar(){
    let listado = document.querySelector("#listado");
    listado.innerHTML = '';
    
    for (const elementoActual of objetos) {
        listado.innerHTML += `<li>${elementoActual.cantidad}${elementoActual.producto}</li>`;
        
    }
}

function agregar1(){
    console.log("empieza la funcion"); 
    let nombre = document.querySelector("#objeto").value;
    let objetoNuevo = {
        producto: nombre,
        cantidad: 1,
    };
    objetos.push(objetoNuevo);
    mostrar();
    console.table(objetos);
}

function agregar2 (){
    console.log("empieza la funcion2"); 
    let nombre = document.querySelector("#objeto").value;
    let objetoNuevo = {
        producto: nombre,
        cantidad: 2,
    };
    let listado = document.querySelector("#listado");
    listado.innerHTML = '';
    
    objetos.push(objetoNuevo);
    mostrar();
}

function agregar3 (){
    console.log("empieza la funcion3"); 
    let nombre = document.querySelector("#objeto").value;
    let objetoNuevo = {
        producto: nombre,
        cantidad: 3,
    };
    let listado = document.querySelector("#listado");
    listado.innerHTML = '';
    
    objetos.push(objetoNuevo);
    mostrar();
}

    
     

