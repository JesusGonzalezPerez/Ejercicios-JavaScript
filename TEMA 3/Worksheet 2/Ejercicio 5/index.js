//Crear una función que cree un array de 100 números aleatorios del 1 al 1000. Mostrar el contenido y después organizarlo de forma que estén juntos 
//los elementos pares y los impares, volver a mostrar el contenido. 
function paresImpares() {
    var nums = [];
    var pares = [];
    var impares = [];
    for (var i = 0; i < 100; i++) {
        nums[i] = Math.round(Math.random() * (1000 - 1) + 1);
        if (nums[i] % 2 == 0) {
            pares.push(nums[i]);
        } else {
            impares.push(nums[i]);
        }
    }
    
    document.write("<strong>Array sin ordenar</strong> <br>");
    //Muestra el contenido del array
    for (var y = 0; y < nums.length; y++)
        document.write(nums[y] + " ");

    document.write("<br>");
    console.log(nums.length);

    //Vacía el array
    nums = [];

    //Guarda los números pares en un array auxiliar
    for (var z = 0; z < pares.length; z++)
        nums.push(pares[z]);

    //Guarda los números impares en un array auxiliar
    for (var x = 0; x < impares.length; x++)
        nums.push("<font color=red>" + impares[x] + " </font");

    document.write("<strong>Array ordenado </strong><br> ");
    //Muestra el contenido del array ya ordenado
    for (var y = 0; y < nums.length; y++)
        document.write(nums[y] + " ");

    console.log(nums.length);
}

//Llamada a la funcíon
paresImpares();

