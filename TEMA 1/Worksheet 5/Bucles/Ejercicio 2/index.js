//Crear un script que pida al usuario un número e imprima en el documento HTML todos los números desde el introducido hasta el 100.

//Variable para almacenar el número "desde".
var desde=parseInt(prompt("Introduzca un número"));

//Bucle que muestra todos los números por los que pasa el bucle.
for(let i=desde;i<=100;i++)
    document.write(i+" ");

