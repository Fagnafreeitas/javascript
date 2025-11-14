//var fiat1 = "Palio";
//var fiat2 = "Uno";
//var fiat3 = "Siena";
//var fiat4 = "Mobi";

//var volks1 = "Gol";
//var volks2 = "Voyage";
//var volks3 = "Up";
//var volks = "Parati";

const fiat = ["Palio","Uno","Siena","Mobi"];
const volks = ["Gol","Voyage","Up","parati"];

document.getElementById("fiat").innerHTML = "o carro que vocÊ escolheu foi o"+fiat[2]+".";
document.getElementById("volks").innerHTML = "o carro que vocÊ escolheu foi o"+volks[3]+".";


const matriz=["Denis","Santos","42","Betim","Minas Gerais"];

const objeto = {nome:"Denis",sobrenome: "Santos",idade:41,cidade:"Betim",estado:"Minas Gerais"}

document.getElementById("matriz").innerHTML = "o dado que vc escolheu que vocÊ escolheu foi o"+matriz[1]+".";

document.getElementById("objeto").innerHTML = "o dado que vocÊ escolheu foi o"+objeto.cidade+".";
document.getElementById("containtens").innerHTML = "A quantide de array é"+matriz.length+".";
document.getElementById("containtens1").innerHTML = "A quantidede de caracters do conteudo que foi selecionado é"+matriz[2].length+".";
document.getElementById("containtens2").innerHTML = "o ultimo iten da lista é"+matriz[matriz.length - 1]+".";

matriz.push("Brasileiro");
document.getElementById("containtens3").innerHTML = "A matriz com o item adicionado é"+ matriz ;

document.getElementById("containtens4").innerHTML = "A variavél é uma matriz "+Array.isArray(matriz);

matriz.pop();
document.getElementById("containtens5").innerHTML = "A matriz sem o ultimo item"+(matriz) ;

matriz.shift();
document.getElementById("containtens6").innerHTML = "A matriz sem o primeiro item"+(matriz) ;

matriz.unshift("Daniel");
document.getElementById("containtens7").innerHTML = "Adicionar a matriz no primeiro lugar"+(matriz) ;

matriz.splice(2,0,"item1","item2");
document.getElementById("containtens8").innerHTML = "matriz com itens adicionados no meio"+(matriz) ;

const carros = fiat.concat (volks);
document.getElementById("containtens9").innerHTML = "matriz concatenada com outra matriz"+(carros) ;

carros.sort();
document.getElementById("containtens10").innerHTML = "matriz em ordem alfabetica"+(carros) ;

carros.reverse();
document.getElementById("containtens11").innerHTML = "matriz em ordem alfabetica " +(carros)+ "." ;

const numeros=[50,100,1,1000,4,27,11]

numeros.sort(function(a,b){return a - b});
document.getElementById("containtens12").innerHTML = "matriz em ordem crescente"+(numeros) ;

numeros.sort(function(a,b){return b - a});
document.getElementById("containtens13").innerHTML = "matriz em ordem crescente"+(numeros) ;





