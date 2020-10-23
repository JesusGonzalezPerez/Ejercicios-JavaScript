
var dado=0;

function lanzamiento(){
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    var num5=0;
    var num6=0;
    dado=Math.round(Math.random()*(6-1)+1);
    switch(dado){
        case 1:
            document.write("<svg width=80 height=80> <circle cx=35 cy=35 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num1++;
            break;
        case 2:
            document.write("<svg width=80 height=80> <circle cx=25 cy=25 r=5 stroke=black fill=black /> <circle cx=45 cy=45 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num2++;
            break;
        case 3:
            document.write("<svg width=80 height=80> <circle cx=20 cy=20 r=5 stroke=black fill=black /> <circle cx=35 cy=35 r=5 stroke=black fill=black /> <circle cx=50 cy=50 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num3++;
            break;
        case 4:
            document.write("<svg width=80 height=80> <circle cx=20 cy=20 r=5 stroke=black fill=black /> <circle cx=50 cy=20 r=5 stroke=black fill=black /> <circle cx=20 cy=50 r=5 stroke=black fill=black /> <circle cx=50 cy=50 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num4++;
            break;
        case 5:
            document.write("<svg width=80 height=80> <circle cx=20 cy=20 r=5 stroke=black fill=black /> <circle cx=50 cy=20 r=5 stroke=black fill=black /> <circle cx=35 cy=35 r=5 stroke=black fill=black /> <circle cx=20 cy=50 r=5 stroke=black fill=black /> <circle cx=50 cy=50 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num5++;
            break;
        case 6:
            document.write("<svg width=80 height=80> <circle cx=20 cy=20 r=5 stroke=black fill=black /> <circle cx=50 cy=35 r=5 stroke=black fill=black /> <circle cx=50 cy=20 r=5 stroke=black fill=black /> <circle cx=20 cy=35 r=5 stroke=black fill=black /> <circle cx=20 cy=50 r=5 stroke=black fill=black /> <circle cx=50 cy=50 r=5 stroke=black fill=black /> <rect width=50 height=50 x=10 y=10 rx=5 ry=5 fill-opacity=0.05 stroke=black stroke-width=2 /> </svg><br>");
            num6++;
            break;     
    }
    return dado;

}

document.write(lanzamiento());
