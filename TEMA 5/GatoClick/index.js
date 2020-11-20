var cont=0, cont2=0;

class Imagen {
    constructor(id, src, width, height, cont) {
        this.id = id;
        this.src = src;
        this.width = width;
        this.height = height;
        this.cont = 0;

        //Crear representacion en pantalla
        this.gato = document.createElementNS("http://www.w3.org/2000/svg", "img");
        this.gato.setAttributeNS(null, "id", this.id);
        this.gato.setAttributeNS(null, "src", this.src);
        this.gato.setAttributeNS(null, "width", this.width);
        this.gato.setAttributeNS(null, "height", this.height);
        this.gato.setAttributeNS(null, "cont", 0);

        document.getElementsByTagName('body')[0].appendChild(this.gato);
    }
}

function crearGatos(){
    gatos = [];
    for (let i = 1; i < 11; i++) {
        gatos.push(new Imagen(i,"cat.png","40vw","40vh",0));
    }
}

function clica() {
    cont++;
    document.getElementById('label1').innerHTML= "Cont:"+cont;
  }

  function clica2() {
    cont2++;
    document.getElementById('label2').innerHTML= "Cont:"+cont2;
  }

  window.onload = () => {
    crearGatos();
  }