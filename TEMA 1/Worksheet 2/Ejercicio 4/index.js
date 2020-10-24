//Creamos las variables necesarias para el convertidor de temperatura.
var celsius=78;
var celsiusAFarenheit=celsius*9/5+32;
var farenheit;
var farenheitACelsius=(celsiusAFarenheit-32)*5/9;

//Imprimimos por pantalla los resultados.
document.write(celsius+"ºC is "+celsiusAFarenheit+"ºF<br>");
document.write(celsiusAFarenheit+"ºF is "+farenheitACelsius+"ºC");