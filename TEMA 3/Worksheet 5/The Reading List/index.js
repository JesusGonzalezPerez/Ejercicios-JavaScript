class Book {
    constructor(title, genre, author, read, readdate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
    }

    isRead() {
        this.read = true;
        this.readDate = new Date();
    }

    getTitle(){
        return this.title;
    }

    getGenre(){
        return this.genre;
    }

    getAuthor(){
        return this.author;
    }

    getRead(){
        return this.read;
    }

    getreadDate(){
        return this.readDate;
    }
}


class Booklist{
    constructor() {
        this.booksRead = 0;
        this.booksNoRead = 0;
        this.arraylibros=[];
    }

    numBooksNoRead(){
        return this.arraylibros.length - this.booksRead;
    }

    numBooksRead(){
        return this.booksRead;
    }

    add(libro){
        this.arraylibros.push(libro);    
    }

    finishCurrentBook(){
        this.arraylibros[arraylibros.length-1].isRead();
        this.booksRead++;
    }
}

//Instanciamos 2 libros y una lista de libros
var libro = new Book("Garbancito","Infantil","Olalla González");
var libro2 = new Book("Harry Potter: La piedra Filosofal","Literatura fantástica","J. K. Rowling");
var listalibros = new Booklist();

//Llamamos al método isRead() del objeto
libro.isRead();

//Añadimos los libros a la lista
listalibros.add(libro);
listalibros.add(libro2);

//Mostramos por pantalla el contenido de la lista de libros
for(let i=0;i<listalibros.arraylibros.length;i++){
    document.write("<strong>Título:</strong> "+listalibros.arraylibros[i].getTitle()+"<br>");
    document.write("<strong>Género:</strong> "+listalibros.arraylibros[i].getGenre()+"<br>");
    document.write("<strong>Autor:</strong> "+listalibros.arraylibros[i].getAuthor()+"<br>");
    document.write("<strong>Leído:</strong> "+listalibros.arraylibros[i].getRead()+"<br><br>");
}