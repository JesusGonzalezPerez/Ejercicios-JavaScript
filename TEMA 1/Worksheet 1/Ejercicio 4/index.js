// Haciendo uso de dos variables, opera ambas y muestra por pantalla el valor de ambas y el resultado de las principales operaciones matemáticas.

//variables para dos numeros con los que se realizaran las operaciones.
var num1=10;
var num2=5;

//varibales para cada operacion matemática y la signación de su valor.
var suma;
suma=num1+num2;

var resta;
resta=num1-num2;

var multiplicacion;
multiplicacion=num1*num2;

var division;
division=num1/num2;

//Mostrar el resultado de las operaciones además de los números utilizados para los cálculos.
document.write("El valor de la primera variable es: <strong>"+num1+"</strong><br>");
document.write(`El valor de la segunda variable es: ${num2}<br>`);
document.write("La suma es: "+ suma+"<br>");
document.write("La resta es: "+ resta+"<br>");
document.write("La multiplicación es: "+ multiplicacion+"<br>");
document.write("La división es: "+ division+"<br>");