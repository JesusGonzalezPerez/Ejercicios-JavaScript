//Contador de 60s hacia atrás y que al llegar a 0 carga la página principal de google

//Variable
var cont = 5;

//función
function imprime() {
    console.log(cont);
    cont--;
    if (cont > 0)
        setTimeout(imprime, 1000);
    if (cont == 0)
        location.href = "http://www.google.com";
}

//Llamada a la función
setTimeout(imprime, 1000);