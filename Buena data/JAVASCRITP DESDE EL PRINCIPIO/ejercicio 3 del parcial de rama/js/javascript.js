//Se desea hacer un sistema sencillo para poder llevar los ingresos y egresos de un negocio durante el año
// 
// 1. Se deben poder cargar los ingresos y egresos mensuales mediante un formulario.
// Por lo tanto se debe poder almacenar cada mes con el respectivo importe de ingreso
// y egreso. Se debe agregar la restriccion en la carga que se carguen no puedan ser mas de 12
// 
// 2. Se debe poder listar el resumen anual mostrando mes y el saldo (ingreso - egreso).
//  Los meses en los existen ganancias(saldo positivo) se deben resaltar con color verde.
//
// 3. Con un boton se debe mostrar la cantidad de meses en los que hubo perdidas(saldo negativo).


// Se debe poder listar el resumen anual mostrando mes y el saldo (ingreso - egreso)

let boton = document.querySelector("#btn-carga").addEventListener("click", function(e){
    listarResumenAnual();
});

let ingresos = document.querySelector("#ingresos");
let egresos = document.querySelector("#egresos");
let mes = document.querySelector("#mes");

function listarResumenAnual(){
    console.log("empezo la funcion");
    let valorIngresos = Number(ingresos.value);
    let valorEgresos = Number(egresos.value);
    let valorMes = Number(mes.value);

    let resumenAnual = valorIngresos-valorEgresos;

    console.log(resumenAnual);

}

