window.onmousemove = function (){
        var x = window.event.clientX;
        var y = window.event.clientY;
        document.getElementById('posicionPuntero').innerHTML= 'X: '+x+' , Y: '+y;
}