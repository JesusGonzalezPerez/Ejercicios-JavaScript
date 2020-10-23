
var numero=parseInt(prompt("Introduzca un número"));


switch (numero){
    default:
        if(numero%2==0)
            document.write("Es número par<br>");
        if(numero%3==0)
            document.write("Es múltiplo de 3<br>");
        if(numero%5==0)
            document.write("Es múltiplo de 5<br>");
        if(numero%2!==0 && numero%3!==0 && numero%5!==0)
            document.write("No es múltiplo de 2, 3 ni 5");
}