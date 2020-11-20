function canvas() {
    document.write("<table id=table border=1>");
    for (var i = 0; i < 28; i++) {
        document.write("<tr id=" + i + " onmousedown='borrarLinea(event)' >");
        for (var j = 0; j < 58; j++) {
            document.write("<td id=" + j + " width=20px height=23px onmousemove='pintar (event)'  ></td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function borrarLinea(evento) {
    var valor = document.getElementById("table");
    for (var i = 0; i < valor.rows.length; i++) {
        if (evento.currentTarget.id == i) {
            var1 = valor.getElementsByTagName("tr")[i];
            for (var j = 0; j < 58; j++) {
                var2 = var1.getElementsByTagName("td")[j].style.backgroundColor = "white";
            }
        }
    }
}

function pintar(evento) {
    if (evento.shiftKey) {
        evento.target.style.backgroundColor = "blue";
    } else if (evento.ctrlKey) {
        evento.target.style.backgroundColor = "red";
    } else if (evento.altKey) {
        var valor = document.getElementById("table");
        for (var i = 0; i < valor.rows.length; i++) {
            d = valor.getElementsByTagName("tr")[i];
            for (var j = 0; j < 50; j++) {
                r = d.getElementsByTagName("td")[j].style.backgroundColor = "white";
            }
        }
    }
} 