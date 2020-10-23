var coleccion=[1,1,3,2,1,5,4,3,'cat','dog','cat','cat'];

function onlyUniques(valor,indice,self) { 
    return self.indexOf(valor)===indice;
}

var unico=coleccion.filter(onlyUniques); 
console.info(...unico);
