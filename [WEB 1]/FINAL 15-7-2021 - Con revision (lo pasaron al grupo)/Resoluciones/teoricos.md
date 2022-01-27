
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 2 -->
    <title>Document</title>
</head>
<body>
    <!-- EJERCICIOS TEÓRICOS -->
    <!-- 4 -->
    <button id="calcular-promedio"></button>
</body>
</html>

----

/* EJERCICIOS TEÓRICOS */

.algunaClase{
    background-color:blue;
}

@media only screen and (min-width: 600px){
    /*Estas son las propiedades que van a modificar con un ancho mínimo de 600px*/
    .algunaClase{
        background-color: coral}
        ;
    }

-----

// EJERCICIOS TEÓRICOS
// 3
let nombre = "Juan";

let notas = [10, 9, 7, 6, 8]; 

let persona = {
    'nombre': "Juan",
    'edad': 29,
    'promedioDeNotas': getPromedio()
}

// 4
let btnPromedio = document.getElementById('calcular-promedio').addEventListener("click", calculaPromedio);