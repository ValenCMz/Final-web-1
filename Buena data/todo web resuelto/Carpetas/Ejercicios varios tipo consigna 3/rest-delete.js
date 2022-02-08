"use strict";



document.addEventListener("DOMContentLoaded", function () {
    let baseURL = "https://web-unicen.herokuapp.com/api/groups/";
    let groupID = "ejemplos";
    let collectionID = "nombres";

    document.querySelector("button").addEventListener("click", deleteData);

    async function deleteData() {
        let div = document.querySelector(".deleteItems");
        let id = document.querySelector("#id").value;
        try {
            let r = await fetch(baseURL + groupID + "/" + collectionID + "/" + id, {
                'method': "DELETE"
            });
            let json = await r.json();
            console.log(json);
            div.innerHTML = "se borro :)";
        } catch (e) {
            console.log(e);
        }
    }
});