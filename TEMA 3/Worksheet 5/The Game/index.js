//The Game: Piedra, papel o tijeras

//Clase en la cual se crea una partida entre dos jugadores e incluye el método partida() el cual genera una partida entre ellos
class Juego {
    constructor(nombre1, nombre2) {
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
    }

    partida() {
        this.jugador1.eleccion.eleccionAleatoria();
        this.jugador2.eleccion.eleccionAleatoria();

        switch (this.jugador1.eleccion.getValor()) {
            case 1:
                if (this.jugador2.eleccion.getValor() == 1) {
                    document.write("<strong> Empate </strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                } else if (this.jugador2.eleccion.getValor() == 2) {
                    document.write("<strong> Ganador: " + this.jugador2.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador2.ganarRonda();
                    this.jugador1.perderRonda();
                } else {
                    document.write("<strong> Ganador: " + this.jugador1.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador1.ganarRonda();
                    this.jugador2.perderRonda();
                }
                break;

            case 2:
                if (this.jugador2.eleccion.getValor() == 2) {
                    document.write("<strong> Empate </strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                } else if (this.jugador2.eleccion.getValor() == 1) {
                    document.write("<strong> Ganador: " + this.jugador2.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador2.ganarRonda();
                    this.jugador1.perderRonda();
                } else {
                    document.write("<strong> Ganador: " + this.jugador1.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado: " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador1.ganarRonda();
                    this.jugador2.perderRonda();
                }
                break;

            case 3:
                if (this.jugador2.eleccion.getValor() == 3) {
                    document.write("<strong> Empate </strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado : " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                } else if (this.jugador2.eleccion.getValor() == 2) {
                    document.write("<strong> Ganador: " + this.jugador2.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado : " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador2.ganarRonda();
                    this.jugador1.perderRonda();
                } else {
                    document.write("<strong> Ganador: " + this.jugador1.getNombre() + "</strong> <br>");
                    document.write(this.jugador1.getNombre() + " ha sacado: " + this.jugador1.eleccion.getEleccion() + " y " + this.jugador2.getNombre() + " ha sacado : " + this.jugador2.eleccion.getEleccion() + "<br><br>");
                    this.jugador1.ganarRonda();
                    this.jugador2.perderRonda();
                }
                break;
        }
    }
}

//Clase jugador en la cual se almacenan el nombre, total de victorias y derrotas y su elección entre piedra, papel o tijeras
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.eleccion = new Eleccion();
    }
    getVictorias() {
        return parseInt(this.victorias);
    }
    getDerrotas() {
        return parseInt(this.derrotas);
    }
    ganarRonda() {
        this.victorias++;
    }
    perderRonda() {
        this.derrotas++;
    }
    getNombre() {
        return this.nombre;
    }
}

//Clase Elección donde se guarda el valor el cual sera un número aleatorio entre 1 y 3 y que corresponderá a una elección entre piedra, papel o tijeras
//También incluye el método que genera aleatoriamente dicha elección
class Eleccion {
    constructor() {
        this.valor = 0;
        this.eleccion = "";
    }
    getValor() {
        return this.valor;
    }
    getEleccion() {
        return this.eleccion;
    }

    eleccionAleatoria() {
        var num = Math.round(Math.random() * (3 - 1) + 1);
        this.valor = num;
        switch (num) {
            case 1:
                this.eleccion = "Piedra";
                break;
            case 2:
                this.eleccion = "Papel";
                break;
            case 3:
                this.eleccion = "Tijeras";
                break;
        }
    }
}

//Instanciamiento de objetos para la simulación de 10 partidas
var partida = new Juego("Yisus", "Xus");
var eleccion = new Eleccion();
eleccion.eleccionAleatoria();

for (var i = 0; i < 10; i++) {
    partida.partida();
}

var ganador;
if(Number(partida.jugador1.getVictorias()<partida.jugador2.getVictorias())){
    ganador=partida.jugador2.getNombre();
}else if(Number(partida.jugador1.getVictorias()>partida.jugador2.getVictorias())){
    ganador=partida.jugador1.getNombre();
}else{
    ganador="No hubo ganador definitivo";
}

//Tabla para mostrar resultados
document.write("<table border=1 width=100%");
    document.write("<tr>");
        document.write("<th colspan=2><h3>En una simulación de 10 partidas:</h3></th>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>El jugador " + partida.jugador1.getNombre() + " ha ganado " + partida.jugador1.getVictorias() + " veces<br>");
        document.write("El jugador " + partida.jugador2.getNombre() + " ha ganado " + partida.jugador2.getVictorias() + " veces </td>");
        document.write("<td rowspan=3><h1>Ganador Definitivo ➜ "+ganador+"</h1></td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Empates: "+(10-Number(partida.jugador1.getVictorias()+partida.jugador2.getVictorias()))+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>El jugador " + partida.jugador1.getNombre() + " ha perdido " + partida.jugador1.getDerrotas() + " veces <br>");
        document.write("El jugador " + partida.jugador2.getNombre() + " ha perdido " + partida.jugador2.getDerrotas() + " veces </td>");
    document.write("</tr>");

