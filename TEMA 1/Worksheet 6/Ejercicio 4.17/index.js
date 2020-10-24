//Imagen con el enunciado del ejercicio
document.write("<img src=4.17.png width=50%><br><hr>");

//Bucle que muestra las tablas de multiplicar del 1 al 10
for(let i=1;i<=10;i++){
    document.write("<br>"+"<strong>Tabla del "+i+"</strong><br>");
    for(let j=1;j<=10;j++){
        document.write(i+"x"+j+"="+i*j+"<br>");
    }
}