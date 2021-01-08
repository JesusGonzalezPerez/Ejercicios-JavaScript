for(var i=0;i<5;i++){
    $('body').append($('<div>'));
    $('div').hide();
}

$('body').click(function() {
    $( "div:nth-child(2)").fadeIn("slow");
    $( "div:nth-child(3)").fadeIn("fast");
    $( "div:nth-child(4)").fadeIn(800);
    $( "div:nth-child(5)").fadeIn(2000);
    $( "div:nth-child(6)").fadeIn(4000);
});

