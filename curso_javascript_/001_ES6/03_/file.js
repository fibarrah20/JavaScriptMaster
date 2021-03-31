'use strict'

console.clear();

const SALUDO = nombre => `Bienvenido ${nombre}`;

console.log(SALUDO('Fernando'));
console.log(EnviaSaludo('Fernando'));

function EnviaSaludo(nombre){
    return `Bienvenido ${nombre}`;
}
