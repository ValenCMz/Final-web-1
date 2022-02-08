

document.querySelector("#btn-calcular").addEventListener("click", function(e){
    calcular();
});

document.querySelector("#btn-eliminar").addEventListener("click", function(e){
    eliminarHistorial();
});


function calcular(){
let valor1 = parseInt(document.getElementById("valor-uno").value);
let valor2 = parseInt(document.getElementById("valor-dos").value);
let operando = document.querySelector("#operador").value;
let resultado = document.querySelector("#resultado");


let result= 0;

switch (operando) {
    case "+":
         result = valor1 + valor2;
        break;
    case "-":
         result = valor1 - valor2;
        break;
    case "*":
        result = valor1 * valor2;
        break;
    case "/":
        if(valor2 != 0){
            result = valor1 / valor2;
             }else{
            console.log("no se puede dividir por 0");
        }
    default:
        break;
    
}
resultado.innerHTML += "<li>" + valor1 + "" + operando + "" + valor2 + "=" + result+ "</li>";
}


function eliminarHistorial(){
    let resultado = document.querySelector("#resultado");

    resultado.innerHTML = "";

}
