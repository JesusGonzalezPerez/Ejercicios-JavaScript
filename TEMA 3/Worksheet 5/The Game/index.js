class Jugador {
    constructor(derrotas, victorias, mano) {
        derrotas=0;
        victorias=0;
        mano="";
    }

    ganarPartida(){
        victorias++;
    }

    perderPartida(){
        derrotas++;
    }
   
    tirada(){

    }
}


class movimiento{
    constructor(piedra, papel, tijera) {
        this.piedra = piedra;
        this.papel = papel
        this.tijera = tijera;
    }

    puntuar(j1, j2){
        if(j1){}
    }
}

