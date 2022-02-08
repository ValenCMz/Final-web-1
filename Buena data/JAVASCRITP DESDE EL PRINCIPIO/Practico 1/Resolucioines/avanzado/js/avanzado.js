/*8.	Crear una página que tenga un contenedor (div) con información y un botón.
 Cree una función Javascript que oculte o muestre el div que contiene la información.*/

//  document.querySelector("#boton").addEventListener("click", Mostrar);

//  function Mostrar (){
//      document.querySelector("#mostrar").classList.toggle("desaparecer");
    

//  }

 /*9.   Implementar una calculadora que permita ingresar dos operandos mediante dos inputs
  y permita realizar las operaciones básicas 
  (suma, resta, división, multiplicación) elegidas desde una lista desplegable (select).*/
  "use strict"
  document.addEventListener("DOMContentLoaded", iniciarPagina);

  function iniciarPagina() {
   
    let operacion = document.querySelector("#operacion");
   
        operacion.addEventListener("change", function(e){
        realizarOperacionSuma(this.value); operacionResta(this.value);
   })

  function realizarOperacionSuma(){
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    if("suma" == operacion.value){
        let suma = (parseInt(valor1) + parseInt(valor2));
        document.querySelector("#mostrar").innerHTML= suma;
    }

    if("resta" == operacion.value){
        let resta = (parseInt(valor1) - parseInt(valor2));
        document.querySelector("#mostrar").innerHTML= resta;
      }

    if("division" == operacion.value){
        let division = (parseInt(valor1) / parseInt(valor2));
        document.querySelector("#mostrar").innerHTML= division;
    }

    if("multiplicacion" == operacion.value){
        let multiplicacion = (parseInt(valor1) * parseInt(valor2));
        document.querySelector("#mostrar").innerHTML= multiplicacion;
    }
  }

}