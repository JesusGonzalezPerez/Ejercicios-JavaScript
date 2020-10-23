var numFilas=parseInt(prompt("Intoduce número de filas"));
var numColums=2;

document.write("<table border=”0” cellspacing=”2” bgcolor=”black” width=500>");
for(let i=1;i<=numFilas;i++){
    document.write("<tr height=50 bgcolor=white>");
        for(let j=1;j<=2;j++){   
            if(j%2!=0){
                document.write("<td width=50>"+i+"</td>");
            }else{
                document.write("<td width=50>"+Math.sin(i)+"</td>");
            }
        }
        document.write("</tr>");
}
        document.write("</table>");