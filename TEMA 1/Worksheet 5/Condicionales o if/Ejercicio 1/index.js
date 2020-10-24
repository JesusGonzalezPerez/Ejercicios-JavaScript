//Crear un script para determinar si un número introducido por teclado es par.

//Variables
var num=parseInt(prompt("Introduzca un número"));

//Condicional que comprueba si el número es par e imprime el resultado.
if(num%2===0){
    document.write("El número introducido es <strong>par</strong>");
}else{
    document.write("El número introducido es <strong>impar</strong>");
}

