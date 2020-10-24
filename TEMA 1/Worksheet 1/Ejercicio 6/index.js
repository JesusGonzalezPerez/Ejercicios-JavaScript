//Creamos dos variables en las que almacenaremos valores introducidos por teclado.
var num1=parseInt(prompt("Introduce el valor para la variable 1"));
var num2=parseInt(prompt("Introduce el valor para la variable 2"));

//Condicional que nos devolverá por pantalla un resultado dependiendo de la condición que cumpla.
if(num1<num2)
    document.write("El número "+num2+" es mayor");
if(num1>num2)
    document.write("El número "+num1+" es mayor");
if(num1==num2)
    document.write("El número "+num1+" y el número "+num2+" son iguales");