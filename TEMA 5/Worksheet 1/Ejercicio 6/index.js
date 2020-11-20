var cont = 0;

function Siguiente() {
    if (cont == document.getElementsByTagName("img").length - 1) {}
    else {
        document.getElementsByTagName("img")[cont].setAttribute("hidden", "true");
        cont++;
        document.getElementsByTagName("img")[cont].removeAttribute("hidden");
    }
}

function Anterior() {
    if (cont == 0) {}
    else {
        document.getElementsByTagName("img")[cont].setAttribute("hidden", "true");
        cont--;
        document.getElementsByTagName("img")[cont].removeAttribute("hidden");
    }
}