'use strict'

console.clear();

var num1 = 10 
var num2 = 10.9 

console.log(typeof(num1))
console.log(typeof(num2))

// Suma
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

//Resta
var diferencia = num3 - num1;
console.log(diferencia);

//Multiplicacion
var mul = num3 * num1;
console.log(mul);

// Division
var div = num3 / num1;
console.log(div);

var divPorCero = num3 / 0;
console.log(divPorCero);
console.log(typeof(divPorCero));

var mulPorTexto = num3 * 'A';
console.log(mulPorTexto);
console.log(typeof(mulPorTexto));

// Boolean
var verdadero = true;
var falso = false;

// Object

var casa = {

    a: "Planta Baja",
    b: "Planta Alta",
    c: "Patio Trasero"

};

console.log(typeof(casa.a));
console.log(casa.b);
