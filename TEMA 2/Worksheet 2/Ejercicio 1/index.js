console.log("Número entre 0 y 1");
console.log(Math.round(Math.random()*(0,1)));

console.log("Número entre 100 y 200");
console.log(Math.round(Math.random()*(200-100)+100));

var num1=parseInt(prompt("Introduce número 1"));
var num2=parseInt(prompt("Introduce número 2"));
console.log("Número aleatorio entre "+num1+" y "+num2);
console.log(Math.round(Math.random()*(num2-num1)+num1));