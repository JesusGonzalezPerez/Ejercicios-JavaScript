var string=prompt("Escriba una palabra");

function invierteCadena(cadena){
    var stringLength = cadena.length;
    var cadenaInvertida = "";

  while (stringLength>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(stringLength);
    stringLength--;
  }
  return cadenaInvertida;
}

if(invierteCadena(string)==string)
    console.log("Las palabras "+string+" y "+invierteCadena(string)+" son palíndromos");
else
console.log("Las palabras "+string+" y "+invierteCadena(string)+" NO son palíndromos");