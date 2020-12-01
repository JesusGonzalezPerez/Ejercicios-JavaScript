//Variables
var bolas;

//Clase Bola
class Bola {
    constructor(r, fill, x, y, velX, velY, id, stroke) {
        this.r = r;
        this.fill = fill;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.id = id;
        this.stroke = stroke;

        //Crear representacion en pantalla
        this.circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circulo.setAttributeNS(null, "cx", this.x);
        this.circulo.setAttributeNS(null, "cy", this.y);
        this.circulo.setAttributeNS(null, "r", this.r);
        this.circulo.setAttributeNS(null, "velX", this.velX);
        this.circulo.setAttributeNS(null, "velY", this.velY);
        this.circulo.setAttributeNS(null, "fill", this.fill);
        this.circulo.setAttributeNS(null, "id", this.id);
        this.circulo.setAttributeNS(null, "stroke", this.stroke);

        document.getElementsByTagName('svg')[0].appendChild(this.circulo);
    }

    // //Función que da movimiento a las bolas
    // mueve() {

    //     this.x = this.x + this.velX;
    //     this.circulo.setAttribute("cx", this.x);

    //     this.y += this.velY;
    //     this.circulo.setAttribute("cy", this.y);

    //     //Detectar colisión con el svg
    //     if (this.x >= document.getElementById("svg").getBoundingClientRect().width - this.r || this.x <= this.r) {
    //         this.velX *= -1;
    //     }
    //     if (this.y >= document.getElementById("svg").getBoundingClientRect().height - this.r || this.y <= this.r) {
    //         this.velY *= -1;
    //     }
    // }
    mueve() {

        this.x = this.x + this.velX;    
        this.y += this.velY;
       

        //Detectar colisión con el svg
        if (this.x >= document.getElementById("svg").getBoundingClientRect().width - this.r || this.x <= this.r) {
            this.velX *= -1;
            if (this.x <= this.r)
                this.x = this.r;
            else
                this.x = document.getElementById("svg").getBoundingClientRect().width - this.r;

        }
        if (this.y >= document.getElementById("svg").getBoundingClientRect().height - this.r || this.y <= this.r) {
            this.velY *= -1;
            if (this.y <= this.r)
                 this.y = this.r;
             else
                 this.y = document.getElementById("svg").getBoundingClientRect().height - this.r;

        }

        this.circulo.setAttribute("cy", this.y);
        this.circulo.setAttribute("cx", this.x);

    }

}

//Función onload
window.onload = () => {

    crearBolas();

    for (let j = 0; j < bolas.length; j++) {
        bolas[j].velX = 2 * (j + 1);
        bolas[j].velY = 2 * (j + 1);
    }
    setInterval(animaTodasBolas, 30);
}

//Funcion que le da movimiento a las bolas
function animaTodasBolas() {
    for (let i = 0; i < bolas.length; i++) {
        this.bolas[i].mueve();
    }
    choque(bolas);
}

//Funcion que crea las bolas
function crearBolas() {
    bolas = [];
    for (let i = 1; i <= 7; i++) {
        bolas.push(new Bola(35, "url(#pattern" + i + ")", 50 * (i + 1) * 2, 40 * i + 40, 2, 2, i, "black"));
    }
}

//Funcion que recorre el array de bolas dos veces, y compara cada bola con otra que no sea ella misma para llamar a la funcion colisionan()
function choque(bolas) {
    for (var i = 0; i <= bolas.length - 1; i++) {
        for (var j = 0; j <= bolas.length - 1; j++) {
            if (i != j) colisionan(bolas[i], bolas[j]);
        }
    }
}

//Funcion que comprueba si dos bolas chocan
function colisionan(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < a.r + b.r) {
        a.x -= a.velX;
        a.y -= a.velY;
        b.x -= b.velX;
        b.y -= b.velY;

        a.velX *= -1;
        a.velY *= -1;
        b.velX *= -1;
        b.velY *= -1;
    }

}