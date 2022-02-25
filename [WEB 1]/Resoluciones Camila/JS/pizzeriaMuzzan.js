/* Recomendador de estilos de pizza con 2 requerimientos: 
    a). Boton recomendar devuelve estilo de pizza aleatorio
    b). Boton twist devuelve nuevo ingrediente 
    
        ejemplo : recomendar -> "pizza de rucula" twist -> "agregale tomates secos"*/

/* Se considera que se dispone de dos arreglos locales que se declaran con JSON: estilosDePizza e ingredientes */

function recomendarEstilo(estilos) {
  const resEstilo = document.querySelector("#resEstilo");
  resEstilo.innerHTML = "";
  const resTwist = document.querySelector("#resTwist");
  resTwist.innerHTML = "";
  const res = Math.floor(Math.random() * estilos.length);
  const btnTwist = document.createElement(`button`);
  btnTwist.innerHTML = "Twist";
  btnTwist.addEventListener("click", function () {
    recomendarIngrediente(estilos[res]);
  });

  resEstilo.innerHTML = `Te recomendamos ${estilos[res].nombre} `;
  resEstilo.appendChild(btnTwist);
}

function recomendarIngrediente(estilo) {
  const resTwist = document.querySelector("#resTwist");
  const res = Math.floor(Math.random() * estilo.ingredientesOpcionales.length);

  resTwist.innerHTML = `Agregale ${estilo.ingredientesOpcionales[res]}`;
}
