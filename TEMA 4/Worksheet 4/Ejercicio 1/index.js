function aplicarCSS1(){
    document.getElementById('html').style.height = "100vh";
    document.getElementById('html').style.borderLeft = "10vw solid #17B5CC"
    document.getElementById('body').style.backgroundColor = '#FFFAC5'
    document.getElementById('enlaces').style.backgroundColor = '#c2b7d4';
    document.getElementById('enlaces').style.boxShadow = '0px 0px 1px 1px #6F00B1';
    document.getElementById('a1').style.color = 'blue';
    document.getElementById('a1').style.fontWeight = 'bold';
    document.getElementById('a1').style.textDecoration = 'none';
    document.getElementById('a2').style.color = 'blue';
    document.getElementById('a2').style.fontWeight = 'bold';
    document.getElementById('a2').style.textDecoration = 'none';
    document.getElementById("marco").style.border="solid #000";
    document.getElementById("marco").style.backgroundColor = '#FFEE3F';
    document.getElementById('hidden').style.display = 'block';
}

function aplicarCSS2(){
    document.getElementById('html').style.borderLeft = "none";
    document.getElementById('body').style.backgroundColor = '#fff';
    document.getElementById('enlaces').style.backgroundColor = '#fff';
    document.getElementById('enlaces').style.boxShadow = 'none';
    document.getElementById('a1').style.color = 'blue';
    document.getElementById('a1').style.textDecoration = 'underline';
    document.getElementById('a2').style.color = 'blue';
    document.getElementById('a2').style.textDecoration = 'underline';
    document.getElementById("marco").style.border="none";
    document.getElementById("marco").style.backgroundColor = '#fff';
    document.getElementById('hidden').style.display = 'none';
}

