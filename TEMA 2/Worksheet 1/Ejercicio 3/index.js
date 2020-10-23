var cont=60;

function imprime(){
  console.log(cont);
  cont--;
  if(cont>0)
    setTimeout(imprime,1000);
}

setTimeout(imprime,1000);