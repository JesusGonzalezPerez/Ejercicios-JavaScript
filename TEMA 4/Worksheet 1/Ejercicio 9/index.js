//Variables
var num=parseInt(prompt("Introduce un número para calcular su factorial"));

//Función
function factorial(n){   
    let total = 1; 
	for (let i=1;i<=n;i++){
		total=total*i; 
	}
	return total; 
}

//Llamada a la función
document.write("Factorial de "+num+" → "+factorial(num)+"<br>");

//Tabla
document.write("<br><table border=1>");
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>Factorial de "+i+" &nbsp </td>");
        document.write("<td>"+factorial(i)+"</td>");
        document.write("</tr>");
    }    
document.write("</table");