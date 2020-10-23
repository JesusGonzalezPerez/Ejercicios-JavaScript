var arrayBidimensional = new Array(100);
var dado1;
var dado2;

for (let i = 0; i < 100; i++) {
    arrayBidimensional[i] = new Array(100);
    dado1 = Math.round(Math.random() * (6 - 1) + 1);
    dado2 = Math.round(Math.random() * (6 - 1) + 1);
    for (let j = 0; j < 100; j++) {
        arrayBidimensional[i][j] = '[' + dado1 + ', ' + dado2 + ']';
     
    }
}


document.write(arrayBidimensional);

let combinaciones=Array()