//Script que pide un número por teclado y si es mayor a 100, le aplica un descuento del 15%.

//Variables
var numero=parseInt(prompt("Introduzca un número"));

//Condicional que comprueba si el número introducido es mayor a 100 y muestra un resultado.
if(numero>100){
    document.write("Aplicando descuento del 15%...<br>");
    document.write("Nuevo número: "+numero*15/100);
}else{
    document.write("Número: "+numero);
}
