//Crea una tabla, le añade el atributo border con valor 1, y lo guarda en una variable
var tabla=$('<table>').attr("border","1");

//Crea 8 filas y 8 columnas y las añade a la tabla
for(var i=0;i<8;i++){
    var fila=$('<tr>CELDA</tr>');
    var celda=$('<td>CELDA</td>');
    fila.append(celda);
    tabla.append(fila);
}

//Añade la tabla al body
$('body').append(tabla);

//color azul para los tr menores al tercer tr / no incluido
$('tr:lt(2)').css("background-color","blue");
//color rojo para los tr mayores al tercer tr / no incluido
$('tr:gt(2)').css("background-color","red");