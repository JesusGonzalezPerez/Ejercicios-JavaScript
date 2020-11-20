function canvas() {
    document.write("<table  border=1 style=border-collapse:collapse>");
    for (var i = 0; i < 33; i++) {
        document.write("<tr>");
        for (var j = 0; j < 97; j++) { document.write("<td width=20px height=21px onmousemove='pintar(event)'> </td>"); }
        document.write("</tr>");
    }
    document.write("</table>");
}

function pintar(evento) {
    if (evento.shiftKey) {
        evento.target.style.backgroundColor = "#4040ff";
    } else if (evento.ctrlKey) {
        evento.target.style.backgroundColor = "ce0018";
    }
}
