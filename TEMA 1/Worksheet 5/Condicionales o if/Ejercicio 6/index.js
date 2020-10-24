//Script que pide edad y residencia al usuario y muestra si puede acceder al carnet de empresarios emprendedores.

//Variables
var edad=parseInt(prompt("Introduzca su edad"));
var residencia=prompt("Introduzca lugar donde reside");

//Condicional 
if(edad>18 && edad<30 && residencia=="Madrid")
    document.write("El usuario puede acceder al carnet de empresarios emprendedores");