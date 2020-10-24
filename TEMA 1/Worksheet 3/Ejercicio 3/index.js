//Creamos una función que calcula las calorias que te quedan por consumir hasta cumplir 100 años.
function calculatedSupply(age,calories){
    let consume=Math.round((100-age)*365*calories);
    document.write("You will need "+consume+" to last you until the ripe old age of "+100+". &nbsp;&nbsp;&nbsp;"); 
    document.write("Age: "+age+" / Calories per day: "+calories+"<br>");
}

//Llamamos a la función varias veces para obtener diferentes resultados y comprobar su funcionamiento.
calculatedSupply(22,1800.88);
calculatedSupply(23,2212);
calculatedSupply(20,2579);