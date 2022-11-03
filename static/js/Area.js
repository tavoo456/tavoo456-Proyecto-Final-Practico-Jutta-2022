function AreaCuadrado(){
    var num1 = parseFloat(document.getElementById("lado").value);
    var cuadrado = document.getElementById("cuadrado")
    
    var res = num1 * num1;
    cuadrado.innerHTML = "El resultado es " + res + ""
    cuadrado.style.backgroundColor = "rgb(31, 250, 53)"
    cuadrado.style.padding = "5px"
}

function AreaTriangulo(){
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    let res = base * altura / 2;

    triangulo = document.getElementById("triangulo")

    triangulo.innerHTML = "El resultado es " + res + ""
    triangulo.style.backgroundColor = "rgb(31, 250, 53)"
    triangulo.style.padding = "5px"
}

function AreaRectangulo(){
    var base = parseFloat(document.getElementById("baserec").value);
    var altura = parseFloat(document.getElementById("alturarec").value);

    let res = base * altura;

    rectangulo = document.getElementById("rectangulo")

    rectangulo.innerHTML = "El resultado es " + res + ""
    rectangulo.style.backgroundColor = "rgb(31, 250, 53)"
    rectangulo.style.padding = "5px"
}