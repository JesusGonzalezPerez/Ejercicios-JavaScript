//Script que pide nombre y apellidos al usuario y muestra por alert o document.write en función del nombre.

//Variables
var nombre=prompt("Introduzca su nombre");
var apellidos=prompt("Introduzca sus apellidos");

//Condicional
if(nombre=="Ricardo"){
    alert("Ricardo "+apellidos);
}else{
    document.write("Ricardo "+apellidos);
}

