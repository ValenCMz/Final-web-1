// Una pizzería desea incorporar una calculadora de precios para calcular 
// el precio final según algunos descuentos que ofrecen.

// Se deben poder cargar la cantidad de pizzas y empanadas (docenas) que se compran
// Los precios y ofertas son:
// *Pizza: $200.00
// *Empanadas (Docena): $300.00
// *Oferta promo pizza + docena de empanadas $400.00

document.querySelector("#BtnComprar").addEventListener("click", CalcularPrecio);

function CalcularPrecio (){

    let pizzas = document.querySelector("#pizzas").value;
    let empanadas = document.querySelector("#empanadas").value;

    let pedido = document.querySelector("#pedido");
    pedido.innerHTML += `Se pedido es: Pizzas: ${pizzas} y Docenas de empanadas: ${empanadas}`;

    let SinDescuento = document.querySelector("#precioSinDescuento");
    SinDescuento.innerHTML += `El precion sin descuento sera: ${pizzas*200 + empanadas*300}`

    let descuento = document.querySelector("#Descuento");

    let promo = 0;
    while((pizzas > 0) && (empanadas > 0)){
        pizzas--;
        empanadas--;
        promo += 400;
    }

    if (pizzas != 0 ){
        promo += pizzas * 200;
    }
    
    if (empanadas != 0){
        promo += empanadas * 300;
    }

    descuento.innerHTML += `El precio final con la oferta es: ${promo}`

}