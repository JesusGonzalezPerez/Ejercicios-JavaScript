//Crea 3 divs
for(var i=0;i<3;i++)
    $('body').append('<div>');

//Añade una etiqueta p por en cada div y escribe dentro 
$('div').eq(0).append('<h3>Noticia1</h3><p>Coronavirus | Últimas noticias del Covid en España: Cifras, restricciones y vacuna, en directo</p>');
$('div').eq(1).append('<h3>Noticia2</h3><p>Estados Unidos | Última hora sobre el posible indulto de Trump tras el asalto al capitolio, en directo</p>');
$('div').eq(2).append('<h3>Noticia3</h3><p>Tres muertes por covid-19 y 130 nuevos contagios</p>');


//Cambiar el tamaño de las fuentes (3 tamaños)
$('div > p').eq(0).css("font-size","1.1rem");
$('div > p').eq(1).css("font-size","1.4rem");
$('div > p').eq(2).css("font-size","1.7rem");

//Al pulsar sobre el titulo, se  debe mostrar u ocultar la noticia
$("h3").on("click", function() {
    $(this).hide();
});

//Cambiar el background-color de la noticia con hover
$('p').hover(
    function(){
        $(this).css('background-color','red');
    }, function() {
        $(this).css('background-color','white');
      }
)