'use strict'

console.clear();

// Operadores Logicos

/*
   AND (&&)
   OR (||)
   Negacion (!)
*/
   
// Negacion
var anio = 2023;

if(anio != 2016){
   console.log("El año no es 2023 en realidad es: " + anio);
}

// AND
if(anio >= 2000 && anio <= 2020){ //&& anio != 2018){
   console.log("Estamos en el rango de años");
}else{
   console.log("Estamos fuera del rango")
}

// OR
if(anio == 2008 || (anio >= 2018 && anio == 2028)){
   console.log("El año termina en numero 8");
}else{
   console.log("Año no Registrado");
}