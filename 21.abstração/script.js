// 1 Classe representando uma conta bancaria

class ContaBancaria {
    // Declaria da classe 'Contabancaria'
    // Atribuido privado; só pode sesr acessadp dentro da classe
    #saldo = 0;
    // Declara o atribuido '#Saldo'. O'#' torna ele privado, impedindo acesso/modificação externa. Inicializa com o 0.

    // Método para depositar um valor
    depositar(valor) {
        // Defina um método público 'depositar' que recebe 'valor' como argumento.
        if (valor > 0) {
            // Verifica se o valor a ser depositado é positivo
            this.#saldo += valor;
            // Se for positivo, adiciona 'valor' ao 'saldo' (o acumulador interno ).

        } else {
            console.log("Valor inválido para deposito!")
            // Exibe uma mensagem de erro no console.
        }
    }
    //Método para mostrar o saldo atual (sem permitir alterar diretamente)
    verSaldo() {
        // Define um método público 'verSaldo' para exibir o saldo.
    console.log(`Saldo atual: R$ ${this.#saldo}`)
    }
}
// Usando a classe
const conta = new ContaBancaria()
// Cria uma nova instancia da classe 'ContaBancaria' e a armazena na constante 'conta'.
conta.depositar(1000);

conta.verSaldo();
//2 classe que representa uma impressora
class Impressora {
    //Declaração da classe 'impressora'.
    //Método público: ação simples e direta
    imprimir(documento) {
        //Defina o método público principal 'imprimir'.
        this.#iniciarImpressora();
        //Chama o método privado '#iniciarImpressora' (detalhe de implementação).
        this.#carregarTinta();

        console.log(`Imprimindo: ${documento}`);

        this.#finalizarImpressora();
    }
    #iniciarImpressora(){

        console.log("Inicializando impressora...");
    }
    #carregarTinta(){
        console.log("Carregando tinta...")
    }
    #finalizarImpressao = new Impressora();
    const impressora = new Impressora();

    impressora.imprimir("Relatório.pdf");

    class pedido {
        constructor(cliente, itens){

            this.cliente = cliente;

            this.ítens = ítens;
        }
    }
    #validarItens() {
        return this.itens.length > 0;
    }

    #calcularTotal(){
        return this.itens.reduce((soma, item) +> soma + item.preco, 0);
    }
}