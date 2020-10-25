//Función para generar una tirada aleatoria de un dado de 6 caras
function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funcón para contar cuantas veces sale una combinacion entre 36000 tiradas
function cuentaCombinaciones() {
    var arrayBidimensional = Array(6).fill(0).map(() => Array(6).fill(0));
    var dado1, dado2;
    for (let i = 0; i < 36000; i++) {
        dado1 = lanzamiento(1, 6);
        dado2 = lanzamiento(1, 6);
        arrayBidimensional[dado1 - 1][dado2 - 1]++;
    }
    for(let i=1;i<=6;i++){
        for(let j=1;j<=6;j++){
            return arrayBidimensional.forEach(combinacion => console.log(combinacion));
        }
    }
}

//Muestra por consola los resultados
document.write("Abrir consola");
console.log("La primera fila equivale a la suma de las combinaciones [1,1] [1,2] [1,3]");
console.log("la segunda fila [2,1] [2,2] etc");
cuentaCombinaciones();
