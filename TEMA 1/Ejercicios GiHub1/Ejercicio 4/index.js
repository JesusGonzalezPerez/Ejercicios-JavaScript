// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both 
// (using the spread operator).

var arrayCombinado;

function combineTwoArrays(array1,array2){
    arrayCombinado=[...array1,...array2];
    return arrayCombinado;
}

var array1 =[1,2,3,4,'dog'];
var array2=[4,5,6,'cat'];
console.log("Array combinado: "+combineTwoArrays(array1,array2));