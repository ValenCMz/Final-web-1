"use estrict"


let tabla = [
    {
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
    },
    {
    "nombre": "Atlético de Madrid",
    "puntos": 74,
    "pj": 35,
    "pg": 22,
    "pe": 8,
    "pp": 5,
    },
    {"nombre": "peperoni salado",
    "puntos": 2,
    "pj": 23,
    "pe": 123,
    "pp": 321,
    }
    ];

console.log(tabla);
console.log(tabla[0]);
console.log(tabla.length);
console.log(tabla[0].puntos - tabla[1].puntos);