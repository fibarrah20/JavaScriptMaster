'use strict'

console.clear();

var num1 = 40;
var num2 = 99.9;

// toString() para convertir numero a texto
console.log(num1.toString())
console.log(num2.toString())

var strNum1 = "20";
var strNum2 = "11.5";
var strNum3 = "ABCabc";

// parseInt() para convertir te texto a numero
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

// parseFloat() para convertir de texto a flotante
console.log(parseFloat(strNum2))
console.log(parseFloat(strNum3))

// toFixed() para redondear numeros a la derecha del flotante
var strFloat = 87.987653;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(10))