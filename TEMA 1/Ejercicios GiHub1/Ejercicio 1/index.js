//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function argumentos() {
    let suma=0;
    for (let i=0;i<arguments.length;i++) {
        suma+=arguments[i];
    }
    return suma;
}

console.log("Suma= "+argumentos(1,2,3,4,5,6));