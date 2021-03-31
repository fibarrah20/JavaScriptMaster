'use strict'

console.clear();

var CadenaEjemplo = "Tutorial de Javascript"

// toUpperCase() - Convertir cadena a Mayusculas
console.log(CadenaEjemplo.toUpperCase())

// toLowerCase() - Convertir cadena a Minusculas
console.log(CadenaEjemplo.toLowerCase())

// concat() - Uniar dos o mas cadenas de texto
var primerNombre = "Fernando"
var segundoNombre = "Ibarra"
console.log(CadenaEjemplo.concat(primerNombre))
console.log(CadenaEjemplo.concat(' ', primerNombre, ' ', segundoNombre))

// Tambien podemos concatenar cadenas de la sigueinte manera
console.log(primerNombre + ' ' + segundoNombre + ' ' + CadenaEjemplo)

// trim() - Quita espacios extras
var Cadenaconespacioextra = '        MiCadena     '
console.log(Cadenaconespacioextra.trim())

var Cadenaconespacioextra2 = '      Mi Cadena    '
console.log(Cadenaconespacioextra2.trim())

// charAt() -> Toma la posicion como argumento y regresa el caracter
var caracterEnCadena = 'Esta es una Cadena de Texto de Prueba'
console.log(caracterEnCadena.charAt(5))
console.log(caracterEnCadena.charAt(11))

// split() divide la cadena de texto en base a un caracter en especifico

var cadenaTextoEjemplo = "Esta es una Cadena de Texto de Prueba"
console.log(cadenaTextoEjemplo.split(' '))

var cadenaTextoEjemplo2 = "Esta,es,una,Cadena,de,Texto,de,Prueba"
console.log(cadenaTextoEjemplo2.split(','))

var cadenaTextoEjemplo3 = "Esto es increible"
console.log(cadenaTextoEjemplo3.split())