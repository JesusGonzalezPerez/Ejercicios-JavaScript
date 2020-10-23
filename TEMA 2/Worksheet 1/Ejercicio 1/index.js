año=new Date().getFullYear();
document.write("1. Year: "+año+"<br>");

var mes=new Date().getMonth();
switch(mes){
    case 0:
        mes="enero";
        break;
    case 1:
        mes="febrero";
        break;
    case 2:
        mes="marzo";
        break;
    case 3:
        mes="abril";
        break;
    case 4:
        mes="mayo";
        break;
    case 5:
        mes="junio";
        break;
    case 6:
        mes="julio";
        break;
    case 7:
        mes="agosto";
        break;
    case 8:
        mes="septiembre";
        break;
    case 9:
        mes="octubre";
        break;
    case 10:
        mes="noviembre";
        break;
    case 11:
        mes="diciembre";
        break;
}
document.write("2. Month: "+mes+"<br>");

dia=new Date().getDate();
document.write("3. Day: "+dia+"<br>");

hora=new Date().getHours()   ;
document.write("4. Hour: "+hora+"<br>");

minutos=new Date().getUTCMinutes();
document.write("5. Minutes: "+minutos+"<br>");

segundos=new Date().getUTCSeconds();
document.write("6. Seconds: "+segundos+"<br>");

fecha=new Date();
document.write("Fecha: "+fecha+"<br>");