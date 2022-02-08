
async function load2(event) {
    event.preventDefault();
    let container = document.querySelector("#use-ajax");
    container.innerHTML = "<h1>Loading...</h1>";
    try {
      let response = await fetch(url);
      if (response.ok) {
        let t = await response.text()
        container.innerHTML = t;
      }
      else
        container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (error) {
      container.innerHTML = "<h1>Connection error</h1>";
    };
   }

let jsload = document.querySelectorAll("#js-load");
jsload.forEach(e=>e.addEventListener("click", load2));