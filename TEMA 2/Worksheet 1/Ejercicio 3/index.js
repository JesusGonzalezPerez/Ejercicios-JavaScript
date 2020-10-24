//Contador de 60s hacia atrás

//Variable
var cont=60;

//función
function imprime(){
  console.log(cont);
  cont--;
  if(cont>0)
    setTimeout(imprime,1000);
}

//Llamada a la función
setTimeout(imprime,1000);