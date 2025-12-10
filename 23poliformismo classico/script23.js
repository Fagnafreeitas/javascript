
    
   class biodiversidade {
    // método genérico
    desenhar() {
        console.log("Animais");
    }
}

// Classes derivadas
class caramelo extends biodiversidade {
    desenhar() {
        console.log("Cachorro caramelo");
    }
}

class gato extends biodiversidade {
    desenhar() {
        console.log("Gato de botas");
    }
}

class calopsita extends biodiversidade {
    desenhar() {
        console.log("Calopsita cantora");
    }
}

// lista de objetos
const animais = [new caramelo(), new gato(), new calopsita()];

// Executa o mesmo método em cada objeto
animais.forEach(a => a.desenhar());
