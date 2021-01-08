$("button:nth-child(2)").click(function () {
    $("div").animate({
        'width': "20rem",
        'height':'20rem',
        'opacity': '0.75',
        'margin-left':'50%',
    }, 3000);
});

$("button:nth-child(3)").click(function () {
    $("div").stop();
});