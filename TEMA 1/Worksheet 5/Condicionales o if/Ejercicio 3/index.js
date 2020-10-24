//Script que reciba la edad y localidad de nacimiento del usuario y felicite a los mayores de 25 años de Madrid.

//Variables
var edad=parseInt(prompt("Introduzca su edad"));
var localidadNacimiento=prompt("Introduzca su localidad de nacimiento");

//Condicional que comprueba que se cumplen las dos condiciones y si es asi, muestra por pantalla un mensaje.
if(edad>25 && localidadNacimiento=="Madrid")
    document.write("Enhorabuena!");
