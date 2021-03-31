'use strict'

console.clear();

var miPrimeraCadena = "Esta es una cadena de texto para Javascript";

// Regresa la longitud de la cadena de texto
console.log(miPrimeraCadena.length);

// Encuentra la posicion de ciertas palabras
console.log(miPrimeraCadena.indexOf('Javascript'));
console.log(miPrimeraCadena.indexOf('Esta'));

// Encuentra la ultima posicion de una cadena de texto dentro de otra cadena
console.log(miPrimeraCadena.lastIndexOf('Javascript'));
console.log(miPrimeraCadena.lastIndexOf('Esta'));

// Obtener una parte de la cadena de texto (inicio, fin)
console.log(miPrimeraCadena.slice(0, 4));
console.log(miPrimeraCadena.slice(21, 31));
console.log(miPrimeraCadena.slice(-10));
console.log(miPrimeraCadena.slice(5));

// Obtiene una sub cadena de texto - substr(posicion inicial, longitud)
console.log(miPrimeraCadena.substr(0, 4));
console.log(miPrimeraCadena.substr(21, 10));
console.log(miPrimeraCadena.substr(21));