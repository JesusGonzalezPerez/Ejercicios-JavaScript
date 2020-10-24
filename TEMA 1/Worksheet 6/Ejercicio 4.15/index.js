//Imagen con el enunciado del ejercicio
document.write("<img src=4.15.png width=50%><br>");

//Variables
var num_adivinar=parseInt(prompt("Introduce el número a adivinar"));
var num=0;

//Bucle while
while (parseInt(num) != parseInt(num_adivinar)) {
    num = prompt("Introduce un número: ");
    if (num < parseInt(num_adivinar)) {
        alert("Es mayor");
    } else if (num > parseInt(num_adivinar)) {
        alert("Es menor");
    } else if (parseInt(num) == parseInt(num_adivinar)) {
        alert("¡HAS ACERTADO!");
    }
}
