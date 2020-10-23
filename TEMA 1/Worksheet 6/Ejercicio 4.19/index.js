var numColums=8;
var numFilas=8;
var anchura=altura=50;

document.write("<table border=”0” cellspacing=”2” bgcolor=”white”>");

for(let j=1;j<=numColums;j++){
    document.write("<tr bgcolor=”black” height="+altura+">");
    for(let i=1;i<=numFilas;i++){
        if(j%2==0){
            if(i%2==0){
                document.write("<td bgcolor=black width="+anchura+">&nbsp</td>");
            }else{
                document.write("<td bgcolor=white width="+anchura+"> &nbsp; </td>");
            }
        }else{
            if(i%2!=0){
                document.write("<td bgcolor=black width="+anchura+">&nbsp</td>");
            }else{
                document.write("<td bgcolor=white width="+anchura+"> &nbsp; </td>");
            }
        }
    }
    document.write("</tr>");
}

document.write("</table>");
