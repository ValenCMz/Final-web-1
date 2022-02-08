function processtext(t){
    let container = document.querySelectorAll("#use-ajax");
    
    container.innerHTML = t;

    container.querySelectorAll(".js-comportamiento").forEach(b=>b.addEventListener("click", holamundo));
}


function loadClick(event){
    event.preventDefault();
    console.log("loading...");
    container = document.querySelectorAll("#use-ajax").innerHTML = "<h1>Loading...</h1>";
    fetch("http://web-unicen.herokuapp.com/api/html").then(function(response){
        if(response.ok){
            response.text().then(processtext); 
        }
        else
            container.innerHTML = "<h1>Error - failed URL!";
    })
    .catch(function(response){
        container.innerHTML = "<h1>Error - conection failed!";
    })
}



let jsload = document.querySelectorAll(".js-load");
jsload.forEach(e=>e.addEventListener("click", loadClick));