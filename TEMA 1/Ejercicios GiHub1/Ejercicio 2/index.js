// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings),
// and returns the sum of only the numbers.

function addOnlyNums(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        if(isNaN(arguments[i])){
            document.write("<strong>"+arguments[i]+"</strong>"+" no es un número<br>");
        }else{
            suma+=arguments[i];
        }
    }
   return suma;
}

let lista=[1,2,3,4,6,"cat"];
console.log(addOnlyNums(...lista));