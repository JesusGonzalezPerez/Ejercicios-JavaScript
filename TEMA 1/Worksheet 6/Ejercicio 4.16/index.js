//Imagen con el enunciado del ejercicio
document.write("<img src=4.16.png width=50%><br>");

//Variables
var num_adivinar = Math.round(Math.random()* (100-1) + 1);
var num = 0;

//Bucle do while (Incluye chuleta para poder comprobar el correcto funcionamiento del programa).
do {
    num = parseInt(prompt("Introduce un número:"));
    if (num < parseInt(num_adivinar)) {
        alert("Es mayor ("+num_adivinar+")");
    } else if (num > parseInt(num_adivinar)) {
        alert("Es menor ("+num_adivinar+")");
    } else if (parseInt(num) == parseInt(num_adivinar)) {
        alert("HAS ACERTADO");
    }
} while (parseInt(num) != parseInt(num_adivinar));
