//Crea una función para calcular potenicas de modo recursivo

//Variables
var base=parseInt(prompt("Introduce la base"));
var exp=parseInt(prompt("Introduce el exponente"));

//Función
function calcPotencia(base, exp){
    if (exp==0){ 
        return 1;
    } else { 
        return base * calcPotencia(base, exp-1);
    }
}

document.write("<h2>"+base+" elevado a "+exp+" = "+calcPotencia(base, exp)+"</h2>");