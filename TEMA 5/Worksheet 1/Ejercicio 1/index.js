window.onload = function() {
    var body = document.getElementById("body");
  
    // Número de enlaces de la página
    var enlaces = document.getElementsByTagName("a");
    body.innerHTML = "Numero de enlaces: " + enlaces.length;

    // Dirección a la que enlaza el penúltimo enlace
    var ultEnlace = enlaces[enlaces.length-2];
    body.innerHTML = body.innerHTML + "<br/>El penúltimo enlace apunta a: <a href="+ultEnlace+">" + ultEnlace+"</a>";

    // Número de enlaces que enlazan a google 
    var cont = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "https://www.google.com") {
            cont++;
        }
    }
    body.innerHTML = body.innerHTML + "<br/>" + cont + " enlaces que apuntan a Google"

    // Número de enlaces del tercer párrafo
    var parrafos = document.getElementsByTagName("p");
    var enlacesParr3 = parrafos[2].getElementsByTagName("a");
    body.innerHTML = body.innerHTML + "<br/>" + "Número de enlaces del tercer párrafo: " + enlacesParr3.length;
}