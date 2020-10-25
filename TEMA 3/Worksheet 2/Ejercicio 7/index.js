//Array
var arrayPrueba= [0,1,2,3,4,5,6,7,8,9,10,11,12];

//Función que establece los 10 primeros valores del array a 0
function elementosArray0(arr1){
    return arr1.map( (elemento,index) => {
        if(index<10) 
            return 0;
        else    
            return elemento;})
}

//Función que añade 1 a cada elemento del array
function elementosMas1(arr2){
    for(var i=0;i<arr2.length;i++){
        arr2[i]=arr2[i]+1;
    }
    return arr2;
}

//Funciín que muestra los valores del array separados por espcacios
function porEspacios(arr3){
    return arr3.join(" ");
}

//Muestra por pantalla el array y realiza llamadas a las funciones para comprobar su funcionamiento.
document.write("<strong>Array: "+arrayPrueba+"</strong><br>");
document.write("a) Array igualados a 0: "+elementosArray0(arrayPrueba)+"<br>");
document.write("b) Array sumando 1: "+elementosMas1(arrayPrueba)+"<br>");
document.write("c) Array por espacios: "+porEspacios(arrayPrueba)+"<br>");