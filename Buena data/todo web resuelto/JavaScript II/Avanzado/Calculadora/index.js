"use strict"

let historial = [];
//--------------------------------------------------------------------------
let btnSumar = document.querySelector("#suma");
btnSumar.addEventListener("click", (e)=>{
    e.preventDefault();
    
    var resultado = document.querySelector("#resultado").innerHTML;
    resultado = Number(document.querySelector("#valor1").value) + 
    Number(document.querySelector("#valor2").value);

    almacenar("+",resultado);
    mostrar();
    
})
//--------------------------------------------------------------------------
let btnRestar = document.querySelector("#resta");
btnRestar.addEventListener("click", (e)=>{
    e.preventDefault();

    almacenar("-",Number(document.querySelector("#valor1").value) - 
    Number(document.querySelector("#valor2").value));
    mostrar();
})
//--------------------------------------------------------------------------
let btnMultiplicar = document.querySelector("#multiplicacion");
btnMultiplicar.addEventListener("click", (e)=>{
    e.preventDefault();

    almacenar("*",Number(document.querySelector("#valor1").value) * 
    Number(document.querySelector("#valor2").value));
    mostrar();
})
//--------------------------------------------------------------------------
let btnDivision = document.querySelector("#division");
btnDivision.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(document.querySelector("#valor2").value != "0"){
    
        almacenar("/",Number(document.querySelector("#valor1").value) / 
        Number(document.querySelector("#valor2").value));
        mostrar();}
        
    else{
        alert("NO SE PUEDE DIVIDIR POR CERO!");
    }
})
//--------------------------------------------------------------------------
function almacenar(op,result){
    
    var A = document.querySelector("#valor1").value;
    var B = document.querySelector("#valor2").value;
    var op = op;
    var result = result;

    var operacion = {
        "A" : A,
        "B" : B,
        "operacion" : op,
        "resultado" : result
     }

     historial.push(operacion);
     mostrar();
}
//--------------------------------------------------------------------------
let btnBorrar = document.querySelector("#borrar");
btnBorrar.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("#historial").innerHTML = "";
})
//--------------------------------------------------------------------------
function mostrar(){
    document.querySelector("#historial").innerHTML = "";
    for(let elem of historial){
        document.querySelector("#historial").innerHTML += `<li>A:${elem.A} B:${elem.B} op:${elem.operacion}  resultado:${elem.resultado}</li>`
    }
}
//--------------------------------------------------------------------------