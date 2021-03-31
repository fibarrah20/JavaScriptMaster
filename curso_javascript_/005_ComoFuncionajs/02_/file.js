'use strict'

console.clear();

function primerAccion(){
    return segundaAccion();
}

function segundaAccion(){
    return primerAccion();
}

segundaAccion();