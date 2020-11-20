if(!document.cookie){
   document.cookie = "name=oeschger";
   var nombre= prompt("Introduzca su nombre");
   var fecha=new Date();
   var min= fecha.getMinutes();
   fecha.setMinutes(min+5);
   document.cookie="nombre="+nombre+"; expires="+fecha+"";
   console.log(document.cookie);
}else{
    alert("Hola"+nombre);
}

