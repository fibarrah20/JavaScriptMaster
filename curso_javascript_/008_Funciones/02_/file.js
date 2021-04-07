'use strict'

console.clear();

// Funciones

var numero1 = 10;
var numero2 = 10;

CalcOperaciones(numero1,numero2);

function CalcOperaciones(numero1, numero2){
   console.log("Suma: " + (numero1 + numero2));
   console.log("Resta: " + (numero1 - numero2));
   console.log("Multiplicacion: " + (numero1 * numero2));
   console.log("Division: " + (numero1 / numero2));
   console.log("............................................")
}

// Invocar siempre que se necesite
// for(var i = 1; i <= 10; i++){
//    console.log("Proceso " + i);
//    CalcOperaciones(i, 10)
// }



