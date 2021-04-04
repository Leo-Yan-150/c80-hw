function getp1(){
var inputs = [];
for(var i = 1; i<=6; i++){
inputs.push(document.getElementById("textbox" + i).value);
}
document.getElementById("showP1").innerHTML = inputs.join(". ");
}
function getp2(){
    var inputs = [];
    for(var j = 1; j<=6; j++){
    inputs.push(document.getElementById("stextbox" + j).value);
    }
    document.getElementById("showP2").innerHTML = inputs.join(". ");
    }