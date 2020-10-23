var num1=prompt("Introduce el primer número");
var num2=prompt("Introduce el segundo número");
var num3=prompt("Introduce el tercer número");
var num4=prompt("Introduce el cuarto número");

function maximo(num1, num2, num3, num4){
    let max=0;
    if(num1>num2 && num1>num3 && num1>num4){
        max=num1;
    }else if(num2>num1 && num2>num3 && num2>num4){
        max=num2;
    }else if(num3>num1 && num3>num2 && num3>num4){
        max=num3;
    }else if(num4>num1 && num4>num2 && num4>num3){
        max=num4;
    }
    return max;
}

console.log("El mayor de los numero es: "+maximo(num1, num2, num3, num4));