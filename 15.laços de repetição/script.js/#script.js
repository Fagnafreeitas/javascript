 for (let numero = 0; numero < 5001; numero++){
 document.getElementByid("contagem").innerHTML += numero + ","}

//prencher com anos

for (let ano = 2023; ano >= 1910; ano--) {
    document.getElementById("ano").innerHTML += "<option value'" + ano + "'>" + ano + "</opition>";
}

//Podemos tambem pegar a data para atualizar automatico
let anoAtual = new Date().getFullYear();