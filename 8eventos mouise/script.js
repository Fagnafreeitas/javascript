//muda a cor da area 1 para verde quando clicado
function area1clickMouse(){
    document.getElementById("area1").style.backgroundColor = "line";
}

//muda a cor da area 1 para amarelo ao click duplo
function area1clickduplo(){
    document.getElementById("area1").style.backgroundColor = "yellow";
}

// muda a cor da area1 para vermelho ao passar o mouse
function area1PasseMouse(){
    document.getElementById("area1").style.backgroundColor = "red";    
}
//muda a cor da area1 para laranja ao tirar o mouse
function area1TiraMouse(){
    document.getElementById("area1").style.backgroundColor = "orange";    
}
// Gera uma cor hexadecimal aleatoria (ex #A3F12c)
function mudaColoAleatoria(){
    var letters = '012345678ABCDF'; //caracteres hexadecimais
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[match.floor(Match.random() * 16)]; //adiciona letra aleatoria
    }
    return color;// retorna cor aleatoria
}
//Muda a cor da area 2 para uma cor aleatoria quando o mouse se move
function eventoMovermouse(){
    $("#area2").css("background-color", mudaColoAleatoria());
}

//move o quadrado vermelho (areainterna) diagonalmente para baixo
function eventoPressionamouse(){
    let id = null; // controle do intervalo
    const elem = document.getElementById("areainterna");
    let pos = 0; // posição inicial 
    clearInterval(id); // limpa qualquer animação anterior
    id = setInterval(frame, 10); // executa a cada 10ms

    function frame(){
        if (pos == 225) {//limite do movimento
            clearInterval(id); //para a animação
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

// Move o quadrado vermelho (areainterna) de volta á volta á posição original
function eventoSoltaMouse(){
    let id = null; 
    const elem = document.getElementById("areainterna");
    let pos = 200; //começa do fim
    clearInterval(id);
    id = setInterval(frame, 10);

    function frame(){
        if (pos == 0) {//volta ao topo
            clearInterval(id); //para a animação
        } else {
            pos--;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}
// quando o campo recebe foco, muda o fundo da area 3 para azul



function eventoFoco(){
    document.getElementById("area3").style.backgroundColor = "blue";
}

function eventoSaiFoco(){
    document.getElementById("area3").style.backgroundColor = "yellow";
}

function eventoAlterou(){
    document.getElementById("area4").style.backgroundColor = "yellow";
}

function eventoReset(){
   alert("Você irá resetar todos os inputs.");
}




