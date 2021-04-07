'use strict'

console.clear();

// Condicional Switch

var calificacion = 5;

switch (calificacion){

   case 5:
      console.log("Reprobado");
      break;
   case 10:
      console.log("Excelencia");
      break;
   default:
      console.log("Numero no encontrado");
      break;
}

// Un ejercicio mas complicado

//var calif_ = prompt("Teclea una calificacion:" ,0);

// switch(true){
//    case calif_ >= 0 && calif_ < 6:
//       console.log("No Suficiente");
//       break;
//    case calif_ >= 6 && calif_ < 8:
//       console.log("Suficiente");
//       break;
//    case calif_ >= 8 && calif_ <= 10:
//       console.log("Excelente");
//       break;
//    default:
//       console.log("No existe el valor en el rango");
//       break;
// }
