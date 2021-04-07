'use strict'

console.clear();

// Condicion IF (SI)

/* 

SI ( Condicion ) {

} EN CASO CONTRARIO {

} SI EN CASO CONTRARIO {

}

*/

// OPERADORES RELACIONALES
/*
   Mayor que: >
   Menor que: <
   Mayor o igual que: >=
   Menor o igual que: <=
   Igual que: ==
   Distindo que: !=
 */
   
var nombreAlumno = prompt("Teclea tu nombre", "Nombre de Alumno");
var EdadAlumno = prompt("Teclea la edad", "0");

if(EdadAlumno >= 18){
   console.log(nombreAlumno + " tiene " + EdadAlumno + " años, \nEs mayor de edad" );

   if(EdadAlumno <= 25){
      console.log("Aun no eres completamente adulto");
   }else if(EdadAlumno >= 75){
      console.log("Eres un adulto mayor");
   }
   else{
      console.log("Ya eres adulto");
   }

}else{
   console.log(nombreAlumno + " tiene " + EdadAlumno + " años, Es menor de edad" )
}