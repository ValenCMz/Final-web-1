"use strict";
document.addEventListener("DOMContentLoaded", function () {

    let precioPizza = 200;
    let precioEmpa = 300;
    let precioPromo = 400;

    document.getElementById("btn-calcular").addEventListener("click", calcularPrecios);


    function calcularPrecios() {
        let cantPizzas = parseInt(document.getElementById("cant-pizzas").value);
        let cantEmpas = parseInt(document.getElementById("cant-empas").value);
        let cantPromos = 0;
        let fueraDePromo = "";

        //calculo las promociones en caso de haber
        if (cantPizzas > 0 && cantEmpas > 0) {
            if (cantPizzas < cantEmpas) {
                cantPromos = cantPizzas;
                fueraDePromo = "empas";
            } else {
                cantPromos = cantEmpas;
                fueraDePromo = "pizzas";
            }

        }

        let precioSinDesc = (cantPizzas * precioPizza) + (cantEmpas * precioEmpa);

        document.getElementById("precio-sin-descuento").innerHTML = " $" + precioSinDesc;

        let precioConDesc = 0;

        //si hubo efectivamente alguna promo
        if (fueraDePromo != "") {
            if (fueraDePromo == "pizzas") {
                precioConDesc = (cantPromos * precioPromo) + ((cantPizzas - cantPromos) * precioPizza); //la promo mas las pizzas que no estan en promo
            }
            if (fueraDePromo == "empas") {
                precioConDesc = (cantPromos * precioPromo) + ((cantEmpas - cantPromos) * precioEmpa); //la promo mas las empanadas que no estan en promo
            }
        }


        let totalARestar = 0;

        if (precioConDesc > 0) {
            totalARestar = precioSinDesc - precioConDesc;
        }

        document.getElementById("precio-descuento").innerHTML = " $" + totalARestar;

        if (precioConDesc > 0) {
            document.getElementById("total-pedido").innerHTML = " $" + precioConDesc;
        } else {
            document.getElementById("total-pedido").innerHTML = " $" + precioSinDesc;
        }

    }

});