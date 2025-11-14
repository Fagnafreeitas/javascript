function ligar() {
    var valor1 = document.getElementById("numero").ariaValueMax;
    var valor = 14;

    if (valor1 == valor2) {
        document.getElementById("botao1").style.backgroundColor = "yelllow";
        document.getElementById("botao1").style.backgroundColor = "red";
        document.getElementById("numero2").innerHTML = "Acertou!!!";
    }else{
        if(valor1 < 10){
            document.getElementById("numero2").innerHTML = "não foi dessa vez!!!";
        }
        if (valor1 > 9 && valor1 < 14){
            document.getElementById("numero2").innerHTML = "Continue tentando!!!";
        }
        if (valor1 > 14 && valor1 < 17){
            document.getElementById("numero2").innerHTML = "Continue tentando!!!";
        }
        if (valor1 > 17){
            document.getElementById("numero2").innerHTML = "tente mais uma!!!";
        }
        var x = 0;
            document.getElementById("contar").innerHTML = (valor1 != valor2) ? "":"";
        }
    }
    function ligar(){

    }
var contarVal = 0;

function contarClick() {
    updateDisplay(++contarVal);

}
function resetarContador(){
    contarVal = 0
    updateDisplay(contarVal);
}
function updateDisplay(val){
    document.getElementById("contartentativas").innerHTML = val;
}
var btn =  document.querySelector("#resetar");
btn.addEventListener("click", function(){

})
function updateDisplay(val){
    document.getElementById("contartentativas").innerHTML = val;

}
var btn = document.querySelector("#resetar");
btn.addEventListener("click", function(){
   location.reload();
})
function verificarnumero() {
    let teste1 =  document.getElementById("testenumero").value;

    switch (teste1) {
        case "2":
            document.getElementById("botao10").style.backgroundColor = "yellow";
            document.getElementById("numero3").innerHTML = "parabéns vc acertou o numero!!!";
            document.getElementById("botao10").style.color = "red" ;
            break;
        default:
            document.getElementById("numero3").innerHTML = "não foi dessa vez, tente novamente!!!";

    }
}
var ganhou = Math.floor(Match.randon() * 9) + 1;

function testar(elem){
    var num = parseInt(elem.innerHTML);
    switch (num) {
        case ganhou:
            document.getElementById("#resposta").innerHTML = "Parabens!!! Você achou a caixa correta!!";
            document.getElementById("#resposta").style.backgroundColor = "yellow";

            break;
         case ganhou:
            document.getElementById(".caixa").innerHTML = "parabens vc encontrou a caixa certa !!!";
            document.getElementById(".caixa").innerHTML = "Yellow!!!";
         
        default:
        alert("PERDEU")    
        
    }
    
}

function contarClickz() {
    updateDisplay2(++contarVal)
}
function updateDisplay2(val){
    document.getElementById("contartentativas2").innerHTML = val;

}
var btn = document.querySelector("#resetar2").innerHTML= val;
btn.addEventListener("click", function (){
    location.reload();
})

        








    }
}