//Imagen con el enunciado del ejercicio
document.write("<img src=4.12.png width=50%><br><hr>");

//Variables
var numColums=parseInt(prompt("Intoduce número de columnas"));
var anchura=parseInt(prompt("Intoduce anchura (px)"));
var altura=parseInt(prompt("Intoduce altura (px)"));

//Tabla
document.write("<table border=”0” cellspacing=”2” bgcolor=”white” width="+anchura+">");
document.write("<tr bgcolor=”black” height="+altura+">");

for(let i=1;i<=numColums;i++){
    if(i%2!=0){
        document.write("<td bgcolor=black width="+anchura+">&nbsp</td>");
    }else{
        document.write("<td bgcolor=white width="+anchura+"> &nbsp; </td>");
    }
}

document.write("</tr>");
document.write("</table>");
