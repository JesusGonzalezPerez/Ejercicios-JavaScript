//Script que recoja la nota de dos exámenes y dos trabajos y determine si la media es superior a 5 para aprobar
//(75% exámenes y 25% trabajos) y 4,5 en todos ellos.

//Variables
var examen1=prompt("Introduzca la nota del primer examen");
var examen2=prompt("Introduzca la nota del segundo examen");
var trabajo1=prompt("Introduzca la nota del primer trabajo");
var trabajo2=prompt("Introduzca la nota del segundo trabajo");
var notaTotal=(75*(examen1+examen2)/200)+(25*(trabajo1+trabajo2)/200);

//Condicional
if(examen1>=4.5 && examen2>=4.5 && trabajo1>=4.5 && trabajo2>=4.5 && notaTotal>=5){
    document.write("Media: "+notaTotal+"<br>");
    document.write("Aprobad@");
}else{
    document.write("Media: "+notaTotal+"<br>");
    document.write("No aprobad@");
}