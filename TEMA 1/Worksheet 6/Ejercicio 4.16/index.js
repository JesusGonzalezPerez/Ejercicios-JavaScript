var num_adivinar=parseInt(prompt("Introduce el número a adivinar"));
var num;

do{
    num=parseInt(prompt("Introduce un número a ver si adivinas"));

    if(num>num_adivinar)
        alert("El número a adivinar es menor al introducido");
    if(num<num_adivinar)
        alert("El número a adivinar es mayor al introducido");
    if(num==num_adivinar)
        alert("Enhorabuena, acertaste!");

}while(num!=num_adivinar);