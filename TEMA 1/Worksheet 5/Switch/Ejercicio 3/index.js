var num1=parseInt(prompt("Introduzca el primer número"));
var num2=parseInt(prompt("Introduzca el segundo número"));
var operacion=prompt("Introduzca el símbolo de la operacion a realizar");

switch(operacion){
    case '+':
        document.write(num1+"+"+num2+" = "+(num1+num2));
        break;
    case '-':
        document.write(num1+"-"+num2+" = "+(num1-num2));
        break;
    case '*':
        document.write(num1+"x"+num2+" = "+(num1*num2));
        break;
    case '/':
        document.write(num1+"/"+num2+" = "+(num1/num2));
        break;
}  
