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

var calif1 = 7;

if(calif1 < 6){
   console.log("Calificacion Reprobatoria")
}else if(calif1 >= 6){
   console.log("Calificacion Aprobatoria")
}else{
   console.log("Valor no identificado")
}