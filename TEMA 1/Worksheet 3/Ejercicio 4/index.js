var radio;
radio=parseInt(prompt("Introduce radio"));

function calcCircumfrence(){
    let circumference=2*Math.PI*radio;
    document.write("The circumference is "+circumference+"<br>");
}

function calcArea(){
    let area=Math.PI*Math.pow(radio,2);
    document.write("The area is "+area);
}

calcCircumfrence();
calcArea();