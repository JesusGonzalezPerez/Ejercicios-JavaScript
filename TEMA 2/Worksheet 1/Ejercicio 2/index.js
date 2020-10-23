var fechaHoy=new Date();
document.write("Fecha de hoy: 2"+fechaHoy+"<br>");

var dias85=85*24*60*60*1000;
document.write("Fecha dentro de 85 dias: "+new Date(fechaHoy.getTime()+dias85)+"<br>");

var dias85=187*24*60*60*1000;
document.write("Fecha hace 187 dias: "+new Date(fechaHoy.getTime()-dias85)+"<br>");

var años2=730*24*60*60*1000;
document.write("Fecha dentro de 2 años: "+new Date(fechaHoy.getTime()+años2)+"<br>");

var horas24=24*60*60*1000;
document.write("Fecha de ayer: "+new Date(fechaHoy.getTime()-horas24)+"<br>");

var fechaResto=new Date(fechaHoy.getTime()+dias85)-new Date(fechaHoy.getTime()-dias85);
document.write("Fecha85 - fecha187: "+fechaResto+"<br>");