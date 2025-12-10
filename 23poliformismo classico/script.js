//1 exemplo - Formas Geoamétricas( poliformismo classicos)

// cada forma (circulo, Quadrado, Triangulo) possui o mesmo metodo desenhar(),

//mas com comportamento diferente 

//Classe base 

class forma {
//metodo generico de desenho, será sobrescrito nas classes filhas

    desenhar(){
    console.log("Desenhando uma forma generica...")
}
}
//Classes derivadas ( herdam e modificam o metodo desenhar )

class Circulo extends forma {
    //sobrescreve o metodo desenhar ( ) com comportamento especifico 
    desenhar(){
        console.log("Desenhando um circulo 🛞 ")
    }
}

class Quadrado extends forma {
    //sobrescreve o metodo desenhar ( ) com comportamento especifico 
    desenhar(){
        console.log("Desenhando um quadrado 🟧")
    }
}

class Triangulo extends forma {
    //sobrescreve o metodo desenhar ( ) com comportamento especifico 
    desenhar(){
        console.log("Desenhando um triangulo 🔺")
    }
}
//lista de formas (todas tratadas como 'formas')
const formas = [new Circulo(), new Quadrado(), new Triangulo()];

// Chama o mesmo método em diferentes objetos
formas.forEach(f => f.desenhar())

//Cada objeto executa sua propria versão do metodo 

// polimorfismo: o metodo desenhar() é o mesmo para todas as classes para todos as classes,
 //mas o resultado muda conforme o tipo do objeto .
 // 2 exemplo - veiculos (mesmo método, ações diferentes mover (),
 //todos os veiculos têm o método mover(), mas cada um se comporta de forma diferente.
 //Classe base
 
 class veiculo {
    //Método padrão 
    mover() {
        console.log("o veiculo esta se movendo ...");
    }
 }

 //Classes filhos sobrescrevem o método


class Carro extends veiculo {
    // Versão especifica do método mover()

    mover() {
        console.log("o carro está rodadando nas ruas");
    }
}
class Barco extends veiculo {
    // Versão especifica do método mover()

    mover() {
        console.log("o esta navegando no mar");
    }
}
class Aviao extends veiculo {
    // Versão especifica do método mover()

    mover() {
        console.log("o avião está voando pelos céus");
    }
}
//Função que aplica polimorfismo 
function iniciarmovimento(veiculo) {
    veiculo.mover()// Chama  o metodo mover() sem saber o tipo do objeto
}

//teste
iniciarmovimento(new Carro()); //Executa mover() do carro,
iniciarmovimento(new Barco()); //Executa mover() do Barco,
iniciarmovimento(new Aviao()); //Executa mover() do carro,

// Polimorfismo: iniciarMovimento() não precisa saber qual tipo de veiculo está recebendo 
// - apenas chama mover(), e cada classe trata do seu jeito .

// 3 exemplo - Funcionários (mesma função, diferentes cargos)

//Cada tipo de funcionário calcula seu bônus de forma diferente,
 //usando o mesmo método calcularBonus().

 // Classe base 
 class Funcionario {
    // Recebe nome e salário ao criar um novo funcionário 
    constructor(nome, salario){
        this.nome = nome; //Guarda o nome
        this.salario = salario; //Guarda salario
    }
    //metodo padrão de cálculo de bônus (5%)
    calcularBonus(){
        return this.salario * 0.05;
    }
 }
 //Classes derivadas (com regras espeficas de bônus )
 class Gerente extends Funcionario {
    // Gerente ganha 20%
    calcularBonus(){
        return this.salario * 0.20;
    }
 }
 class Desenvolvedor extends Funcionario {
    //Desenvolver ganha 10%
    calcularBonus(){
    return this.salario * 0.10;
 }
 }
 class Estagiario extends Funcionario {
    //Desenvolver ganha 10%
    calcularBonus(){
    return this.salario * 0.02;
 }
 }

 //Lista de funcionários

 const funcionarios = [
    new Gerente("Marcos", 8000),             // Gerente com salário 8000
    new Desenvolvedor("Ana", 5000),          // Desenvolvedor com salário 5000
    new Estagiario("Pedro", 2000)            // Estagiário com salário 2000
 ];
  

 // Aplicando o mesmo método  em objetos  diferentes 

 funcionarios.forEach(f => {
    console.log(`${f.nome} - Bônus: R$${f.calcularBonus()}`)
 })

 //polimorfismo: todos os funcionários têm método calcularBonus(),
 //mas cada um calcula de forma diferente depedendo do cargo.
