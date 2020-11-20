var size = 1;

function incrementarTamañoFuente(event) {
        size += 0.1;
        document.body.style.fontSize = size + "em";
}

function decrementarTamañoFuente(event) {
        size -= 0.1;
        document.body.style.fontSize = size + "em";
}

function justificarTexto() {
        document.body.style.textAlign = 'justify';
}

function alinearTexto() {
        document.body.style.textAlign = 'left';
}