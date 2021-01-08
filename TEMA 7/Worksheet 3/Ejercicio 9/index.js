$('button:nth-child(1)').click(function () {
    var styles = {
        width: "40px",
        height: "40px",
        backgroundColor : "#f0f"
      };
    var div=$('<div>');
    div.css(styles);
    $('body').prepend(div);
    $(div).animate({
        'margin':'0',
        "background-color":"blue",
    }, 3000);
    
    $(div).slideUp("slow");
});

$("button:nth-child(2)").click(function () {
    $("div").stop();
});