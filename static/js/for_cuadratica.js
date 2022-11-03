// var a = prompt("Variable a: ");
// var b = prompt("Variable b: ");
// var c = prompt("Variable c: ");

// var raiz = b*b-4*a*c

// if (raiz<0){
//     alert("Es una solucion imaginaria")
// }

// if (a!=0){
//     x1 = (-b+Math.sqrt(raiz))/2*a;
//     x2 = (-b-Math.sqrt(raiz))/2*a;
// }

// console.log(x2)

function calc2grad(a,b,c){
    discriminante=Math.pow(b,2)-4*a*c;
      if(discriminante<0){
        document.getElementById("info").innerHTML="No tiene soluciones [dis<0]"
      }else if(discriminante==0){
        document.getElementById("info").innerHTML="Tiene una sola solución [dis==0]"
        document.getElementById("x1").value=parseFloat((-b)/(2*a));
      }else{
        document.getElementById("info").innerHTML="Tiene dos solución [dis>0]"
        document.getElementById("x1").value=parseFloat(((-b)+Math.sqrt(discriminante))/(2*a));
        document.getElementById("x2").value=parseFloat(((-b)-Math.sqrt(discriminante))/(2*a));
      }
    }
    window.onload = function(){
    var but = document.getElementById("calc");
    but.addEventListener('click',function(){
        var a=parseFloat(document.getElementById("a").value);
        var b=parseFloat(document.getElementById("b").value);
        var c=parseFloat(document.getElementById("c").value);
        calc2grad(a,b,c);
    },false);
    }