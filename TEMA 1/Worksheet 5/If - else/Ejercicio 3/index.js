//Script que pregunta edad y muestra en que etapa educativa corresponde.

//Variables
var edad=parseInt(prompt("Introduzca su edad"));

//Condicional
if(edad<=5)
    document.write("Deberia de estar en jardin de infancia");
    if(edad>5 && edad<=11)
        document.write("Deberia de estar en primaria");
        if(edad>11 && edad<=16)
            document.write("Deberia de estar en la ESO");
            if(edad>16 && edad<=21)
                document.write("Deberia de estar en bachillerato o ciclo formativo");
                if(edad>21)
                    document.write("Deberia de estar en la universidad");
           