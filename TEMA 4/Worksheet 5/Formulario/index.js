
window.onload = function () {
    document.getElementById('nombre').addEventListener("blur", formulario);
    document.getElementById('dni').addEventListener("blur", formulario);
    document.getElementById('tlf').addEventListener("blur", formulario);
    document.getElementById('correo').addEventListener("blur", formulario);
    document.getElementById('usuario').addEventListener("blur", formulario); 
}

function formulario() {
    let nombre = new RegExp('[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]{2,48}');
    let correo = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    let dni = new RegExp('^[0-9]{8,8}[A-Za-z]$');
    let tlf = new RegExp('^[679]{1}[0-9]{8}$');
    let usuario = new RegExp(/(?=.*\d)(?=.*[!@#$%^&()+])[\w!@#$%^&()+]{8,}$/);

    if (nombre.exec(document.getElementById('nombre').value)) {
        document.getElementById('nombreI').style.visibility = "visible";
        document.getElementById('nombreI').style.color = "green";
    } else {
        document.getElementById('nombreI').style.visibility = "visible";
        document.getElementById('nombreI').style.color = "red";
    } 


    if (dni.exec(document.getElementById('dni').value)) {
        document.getElementById('dniI').style.visibility = "visible";
        document.getElementById('dniI').style.color = "green";
    } else {
        document.getElementById('dniI').style.visibility = "visible";
        document.getElementById('dniI').style.color = "red";
    }


    if (tlf.exec(document.getElementById('tlf').value)) {
        document.getElementById('tlfI').style.visibility = "visible";
        document.getElementById('tlfI').style.color = "green";
    } else {
        document.getElementById('tlfI').style.visibility = "visible";
        document.getElementById('tlfI').style.color = "red";
    }


    if (correo.exec(document.getElementById('correo').value)) {
        document.getElementById('correoI').style.visibility = "visible";
        document.getElementById('correoI').style.color = "green";
    } else {
        document.getElementById('correoI').style.visibility = "visible";
        document.getElementById('correoI').style.color = "red";
    }


    if (usuario.exec(document.getElementById('usuario').value)) {
        document.getElementById('userI').style.visibility = "visible";
        document.getElementById('userI').style.color = "green";
    } else {
        document.getElementById('userI').style.visibility = "visible";
        document.getElementById('userI').style.color = "red";
    } 

    if (document.getElementById('userI').style.color == "green" && document.getElementById('userI').style.color == "green" && document.getElementById('userI').style.color == "green" && document.getElementById('userI').style.color == "green" && document.getElementById('userI').style.color == "green"){
        document.getElementById('body').style.backgroundColor = "#8ce538";
        document.getElementById('table').style.backgroundColor = "#bcdd9c";
    }

}