let guardar = document.querySelector("#guardar");
guardar.addEventListener("click", function (e) {
  crearTurno(e);
});

let siguiente = document.querySelector("#siguiente");
siguiente.addEventListener("click", function () {
  siguienteTurno();
});
let turnos = [];

function crearTurno(e) {
  e.preventDefault();
  if (turnos.length < 10) {
    let nuevoTurno = {
      paciente: document.querySelector("#paciente").value,
      edad: document.querySelector("#edad").value,
      embarazada: document.querySelector("#embarazada").value,
    };
    turnos.push(nuevoTurno);
    console.log(turnos);
    listarTurnos();
  } else {
    console.log("Se exedió el límite de turnos");
  }
}

function listarTurnos() {
  let mostrarTurnos = document.querySelector("#turnos");
  mostrarTurnos.innerHTML = "";
  let lista = document.createElement("ul");
  mostrarTurnos.appendChild(lista);
  for (let turno of turnos) {
    let item = document.createElement("li");
    lista.appendChild(item);
    item.innerHTML = `paciente: ${turno.paciente}, edad: ${turno.edad}, embarazada: ${turno.embarazada}.`;
  }
}

function siguienteTurno() {
  for (let i = 0; i < turnos.length - 1; i++) {
    for (let j = i; j < turnos.length; j++) {
      if (turnos[i].edad < turnos[j].edad || turnos[i].embarazada == "no") {
        let aux = turnos[i];
        turnos[i] = turnos[j];
        turnos[j] = aux;
      }
    }
  }
  listarTurnos();
}
