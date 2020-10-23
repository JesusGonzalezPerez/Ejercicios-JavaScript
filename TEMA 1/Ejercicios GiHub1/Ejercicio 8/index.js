// Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

function squareAndSum(){
    var sumCuadrado=0;
    for(let i=0;i<arguments.length;i++)
        sumCuadrado+=Math.pow(arguments[i],2);
    return sumCuadrado;
}

console.log("1^2+2^2= "+squareAndSum(1,2)); //5
console.log("2^2+4^2+3^2= "+squareAndSum(2, 4, 3)); //29