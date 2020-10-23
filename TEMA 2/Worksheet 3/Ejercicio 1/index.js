function invierteCadena(cadena){
    var stringLength = cadena.length;
    var cadenaInvertida = "";

  while (stringLength>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(stringLength);
    stringLength--;
  }
  return cadenaInvertida;
}
console.log("a) /somos lo que comemos/ --> Invertir Cadena");
console.log(invierteCadena("somos lo que comemos"));


function inviertePalabras(...cadena2){
    var palabras= cadena2.length;
    var palabrasInvertidas = "";

        for(var i=palabras-1;i>=0;i--)
            palabrasInvertidas = palabrasInvertidas + cadena2[i]+" ";

    return palabrasInvertidas;
}
console.log("b) /Pepe","chupa","melones/ --> Invertir palabras");
console.log(inviertePalabras("Pepe","chupa","melones"));


function encuentraPalabraMasLarga(...cadena3){
    var palabraMasLarga = "";
    var posicion=0;

      for(var i=0;i<cadena3.length;i++){
        if(i==0){
            palabraMasLarga= cadena3[0].length;
            posicion=+i;
        }else if(palabraMasLarga<cadena3[i].length){
            palabraMasLarga=cadena3[i].length;
            posicion=i;
        }
      }
      return cadena3[posicion];
}
console.log("c) La palabra más larga entre: Alcantarilla, Rata, Pecholobooooooo y Principesa es...");
console.log(encuentraPalabraMasLarga("Alcantarilla","Rata","Pecholobooooooo","Principesa"));


function encuentraPalabraMasLarga(cadena3, long){
  var palabraMasLarga = "";
  var posicion=0;

    for(var i=0;i<cadena3.length;i++){
        if(palabraMasLarga<cadena3[i].length){
            palabraMasLarga=cadena3[i].length;
            posicion=i;
        }
    }
    return cadena3[posicion];
}
console.log("c) La palabra más larga entre: Alcantarilla, Rata, Pecholobooooooo y Principesa es...");
console.log(encuentraPalabraMasLarga("Alcantarilla","Rata","Pecholobooooooo","Principesa"));


