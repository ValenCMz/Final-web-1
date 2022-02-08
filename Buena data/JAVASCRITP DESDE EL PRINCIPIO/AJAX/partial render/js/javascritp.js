// function loadClick(event) {
//     event.preventDefault();
//     let container = document.querySelector("#use-ajax");
//     fetch("https://web1-unicen.herokuapp.com/api/html?")
//         .then(response => {
//             console.log(response);
//             if (response.ok) {
//                 console.log("OK");
//                 response.text().then(text => container.innerHTML = text);
//             } else
//                 container.innerHTML = "<h1>Error - Failed URL!</h1>";
//         })
//         .catch(error => {
//             console.log(error);
//             container.innerHTML = "<h1>Error - Conection Failed!</h1>";
//         });
// }  

// let jsloads = document.querySelectorAll(".js-load");
// jsloads.forEach(e=> e.addEventListener("click", loadClick));


function loadClick(event){
    event.preventDefault();
    let container = document.querySelector("#use-ajax");
    const url = "https://web1-unicen.herokuapp.com/api/html?";

    fetch(url).then(response => {
        console.log(response);
        if(response.ok) {
            console.log("OK");
            response.text().then(text => container.innerHTML = text);
        }
        else
            container.innerHTML = `<h1>Error - Failed URL!</h1>`;
    })
    .catch(error =>{
        console.log(error);
        container.innerHTML = `<h1>Error -Conection failed!</h1>`;
    });
}


let jsloads = document.querySelectorAll(".js-load");
jsloads.forEach(e=>e.addEventListener("click", loadClick));


