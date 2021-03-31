'use strict'

console.clear();

const NOMBRE = 'Fernando';
const APELLIDOS = 'Ibarra Hernandez';

const CREARSALUDO = `Hola, ${getNombreCompleto(NOMBRE, APELLIDOS)}`;

console.log(CREARSALUDO);

function getNombreCompleto(nombres, apellidos){
    return `${nombres} ${apellidos}`;
}