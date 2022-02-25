"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let baseURL = "https://web-unicen.herokuapp.com/api/groups/";
  let groupID = "ejemplos";
  let collectionID = "nombres";

  document.querySelector("button").addEventListener("click", getData);

  async function getData() {
    try {
      let r = await fetch(baseURL + groupID + "/" + collectionID, {
        method: "GET",
        mode: "cors",
      });
      let json = await r.json();
      let contenedor = document.querySelector("#result");
      for (let data of json.nombres) {
        if (data.ingreso >= 10) {
          contenedor.innerHTML += data.thing.nombre + "<br />";
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

});