// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function sumEveryOther(){
    let suma=0;
    for(let i=0;i<arguments.length;i+=2){
        suma+=arguments[i];
    }
    return suma;
}

console.log(sumEveryOther(5, 6, 3, 4, 1)); //9
console.log(sumEveryOther(10, 2, 11)); //21