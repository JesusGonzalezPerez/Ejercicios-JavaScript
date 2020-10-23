// Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.

var arrayCombinado=0;

function combineAllArrays(){
    for(let i=0;i<arguments.length;i++){
        arrayCombinado += arguments[i];
     }
    return arrayCombinado;
}

var array1 =[1,2,3,4,'dog',''];
var array2=[4,5,6,'cat',''];
var array3=[7,9,6,'gato',''];
var array4=[0,55,6,'perro'];

console.log("Array combinado: "+combineAllArrays(array1,array2,array3,array4));