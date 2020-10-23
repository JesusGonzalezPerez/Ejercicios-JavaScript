var numero=parseInt(prompt("Introduzca un número"));

if(numero>100){
    document.write("Aplicando descuento del 15%...<br>");
    document.write("Nuevo número: "+numero*15/100);
}else{
    document.write("Número: "+numero);
}
