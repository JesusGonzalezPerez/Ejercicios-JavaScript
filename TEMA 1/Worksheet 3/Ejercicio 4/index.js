//Creamos una variable radio que obtendrá un valor introducido por teclado.
var radio=parseInt(prompt("Introduce radio"));

//Función que calcula la circunferencia de un círculo.
function calcCircumfrence(){
    let circumference=2*Math.PI*radio;
    document.write("The circumference is "+circumference+"<br>");
}

//Función que calcula el área de un círculo.
function calcArea(){
    let area=Math.PI*Math.pow(radio,2);
    document.write("The area is "+area);
}

//Llamamos a la funciones.
calcCircumfrence();
calcArea();