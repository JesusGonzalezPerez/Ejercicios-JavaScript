window.onload = () => {
    charmander = document.getElementById('charmander');
    setInterval(mover, 30);
}

var charmander;
var posX = 1000, posY = 620;

function mover() {
    charmander.setAttribute("x", posX);
    charmander.setAttribute("y", posY);
}

