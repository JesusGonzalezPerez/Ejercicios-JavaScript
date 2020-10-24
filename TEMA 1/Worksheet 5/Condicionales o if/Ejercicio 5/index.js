//Script que pide al usuario su nombre, y dependiendo de su género saluda de distinta forma (solo para Pablo, Ana, Eduardo y Clara).

//Variables
var nombre=prompt("Introduzca su nombre");

//Condicional que comprueba los nombres y muestra por pantalla el correspondiente saludo.
if(nombre=="Pablo" || nombre=="Eduardo")
    document.write("Bienvenido");
if(nombre=="Ana" || nombre=="Clara")
    document.write("Bienvenida");