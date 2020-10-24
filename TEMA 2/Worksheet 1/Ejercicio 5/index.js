//Crear un reloj con horas, minutos y segundos

//Función
function reloj() {
    var reloj = document.getElementById("reloj");
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    if(horas < 10) { 
        horas = '0' + horas; 
    }
    if(minutos < 10) { 
        minutos = '0' + minutos; 
    }
    if(segundos < 10) { 
        segundos = '0' + segundos; 
    }

    document.getElementById("reloj").innerHTML=("<h1>"+horas+':'+minutos+':'+segundos+"</h1>");

}

//Llamada a la funcion
window.onload = function() {
        setInterval(reloj, 1000);
}
