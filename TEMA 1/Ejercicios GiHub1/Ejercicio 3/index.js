//  Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.

function countTheArgs(){
    var numArgumentos=0;
    for(let i=0;i<arguments.length;i++){
        numArgumentos=arguments[i];
    }
    return numArgumentos.length;
}

let lista=[1,2,3,"cat","dog",5,"Jesús",7];
console.log(countTheArgs(lista));