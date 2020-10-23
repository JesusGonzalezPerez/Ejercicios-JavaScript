var numColums=parseInt(prompt("Intoduce número de columnas"));
var anchura=parseInt(prompt("Intoduce anchura (px)"));
var altura=parseInt(prompt("Intoduce altura (px)"));


document.write("<table border=”0” cellspacing=”2” bgcolor=”white” width="+anchura+">");
document.write("<tr bgcolor=”black” height="+altura+">");

for(let i=1;i<=numColums;i++)
    document.write("<td  bgcolor=white width="+anchura+"> &nbsp; </td>")

document.write("</tr>");
document.write("</table>");
