//Script que pide número de hermanos y en función de la cantidad aplica diferentes descuentos.

//Variables
var numeroHermanos = parseInt(prompt("Introduzca el número de hermanos que tiene"));
var cantidad = parseInt(prompt("Introduzca una cantidad"));

//Condicional
if (numeroHermanos == 0) {
    document.write("La cantidad no varía: " + cantidad);
} else if (numeroHermanos < 3) {
    document.write("Aplicando descuento del 5%...<br>");
    document.write("Nuevo cantidad: " + cantidad * 5 / 100);
} else if (numeroHermanos >= 3) {
    document.write("Aplicando descuento del 15%...<br>");
    document.write("Nuevo cantidad: " + cantidad * 15 / 100);
}
