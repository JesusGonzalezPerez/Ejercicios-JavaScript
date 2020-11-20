function createInputFile(){
    //Crea doble etiqueta <br> para organizar mejor el HTML
    var br1 = document.createElement("br"); 
    var br2 = document.createElement("br"); 
    document.body.appendChild(br1); 
    document.body.appendChild(br2); 
    //Crea los inputs, les asigna los atributos, los muestra en el HTML
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    input1.setAttribute("type","file");
    input2.setAttribute("type","submit");
    input2.setAttribute("value","Añadir otro fichero");
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    input2.setAttribute("onClick","createInputFile()");  
}