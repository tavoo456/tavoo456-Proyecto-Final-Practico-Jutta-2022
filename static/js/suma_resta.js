ranNum = Math.round(Math.random()*30);
ranNum2 = Math.round(Math.random()*20);
ranNum3 = Math.round(Math.random()*20);
document.getElementById("numero").innerHTML = ranNum + " + " + ranNum2 + " - " + ranNum3;

function getValueInput(){
    let inputValue = parseFloat(document.getElementById("num").value); 

    let res = ranNum + ranNum2 - ranNum3
    
    if (inputValue == res){
        document.getElementById("valueInput").innerHTML = "Correcto " + res
        document.getElementById("res").style.backgroundColor = "rgb(31, 250, 53)";

    }
    else{
        document.getElementById("valueInput").innerHTML = "Incorrecto, la respuesta es: " + res;
        document.getElementById("res").style.backgroundColor = "rgb(233, 20, 20)"
    } 
}