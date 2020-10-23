var a=parseInt(prompt("Introduce valor para variable A"));
var b=parseInt(prompt("Introduce valor para variable B"));
var c=parseInt(prompt("Introduce valor para variable C"));

var resultado1= parseInt((-b + Math.sqrt(b*b-4*a*c))/2*a);
var resultado2= parseInt((-b - Math.sqrt(b*b-4*a*c))/2*a);


console.log("Valor de A: "+a);
console.log("Valor de B: "+b);
console.log("Valor de C: "+c);

if(isNaN(resultado1)){
    alert("No tiene solucion 1");
}else{
    console.log("Resultado 1: "+resultado1);
}
if(isNaN(resultado2)){
    alert("No tiene solucion 2");
}else{
    console.log("Resultado 2: "+resultado2);
} 
