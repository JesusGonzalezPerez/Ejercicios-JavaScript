//Crear un script que pida al usuario 10 números y muestre la suma por pantalla.

//Variable suma.
var suma=0;

//Bucle que pide 10 veces un número al usuario y lo va sumando a la variable suma.
for(let i=0;i<10;i++){
    let numero=parseInt(prompt("Introduce un número"));
    suma=parseInt(suma+numero);
}

//Muestra el valor de suma.
document.write(suma);
