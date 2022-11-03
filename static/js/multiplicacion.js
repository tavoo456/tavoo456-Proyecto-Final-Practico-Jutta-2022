ranNum = Math.round(Math.random()*10);
ranNum2 = Math.round(Math.random()*10);
document.getElementById("numero1").innerHTML = ranNum + " x " + ranNum2; 

function getValueInput(){
    let inputValue = parseFloat(document.getElementById("domTextElement").value); 
    

    let res = ranNum * ranNum2
    
    if (inputValue == res){
        document.getElementById("valueInput").innerHTML = "Correcto " + res;
        document.getElementById("res").style.backgroundColor = "rgb(31, 250, 53)";
    }
    else{
        document.getElementById("valueInput").innerHTML = "Incorrecto, la respuesta es: " + res;
        document.getElementById("res").style.backgroundColor = "rgb(233, 20, 20)"
    } 
}