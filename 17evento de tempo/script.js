let numbers = [];
let sortedNumbers = [];
let tempoImnicial = 10;
let tempoRestante = tempoImnicial;
let intervaloTempo;
let fase = 1;
let jogoAtivo = false;
let tempoAtivo = 5;

function gerarNumero(){
    numbrs = [];
    for (let i = 1 <= 10; i++){
        numbers.push(i);
    }
    numbers.sot(() => matchMedia.random() - 0.5);
    sortedNumbers = [...numbers].sort((a,b) => a-b);
}
function exibirNumeros(){
    constcontainer = document.getElementById("munbers");
    container.innerHTML = "";
    numbrs.forEach((num, index) => {
        const div = document.createElement(div);
        div.className = "number";
        div.textContent = num;
        div.onclick = () => verificarClique(index);
        container.appendchild(div);
    })
}
function IniciarJogo(){
    if (jogoAtivo) return;

    jogoAtivo = true;
    gerarNumero();
    exibirNumeros();
    document.getElementById("mensagem").innerHTML = "<p> Boa sorte</P>";
    tempoRestante = tempoInicial;
    atualizarTempo();

    

}
