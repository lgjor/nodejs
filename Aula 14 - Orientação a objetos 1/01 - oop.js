"use strict";
// A diferença entre public e private
// é o que o nosso objeto vai te acesso
// Se estive como private, não teremos acesso a todos os dados
// Podemos por exemplo, mostrar os produtos, mas não o estoque
Object.defineProperty(exports, "__esModule", { value: true });
// Método 1 de declaração de classes
// class Estabelecimento {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]
//     constructor(endereco: string, tipo: string, p: Produto[]) {
//         this.endereco = endereco
//         this.setor = tipo
//         this.produtos = p 
//     }
// }
// Método 2 de declaração de classes
class EstabelecimentoBase {
    constructor(endereco, tipo, produtos, filaDeEspera //? pode ou não ser passado
    ) {
        this.endereco = endereco;
        this.tipo = tipo;
        this.produtos = produtos;
        this._filaDeEspera = 10;
        this.filaDeEspera = filaDeEspera !== null && filaDeEspera !== void 0 ? filaDeEspera : this._filaDeEspera; // Se houver fila de espera, recebe ela mesma, se não, começa com 10
    }
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    get filaDeEspera() {
        return this._filaDeEspera;
    }
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
    diminuiFilaDeEspera() {
        // Se a fila de espera estiver zerada, não faça nada
        if (this._filaDeEspera === 0) {
            return;
        }
        // Se não estive zerada diminua 1
        this._filaDeEspera -= 1;
    }
}
// Object literals -> objetos que não são criados a partir de classes
const padaria = {
    endereco: 'Rua Dos Laranjais, 1230, bloco D',
    tipo: 'alimentação',
    produtos: [{ nome: 'pão', valor: 0.8 },
        { nome: 'arroz', valor: 10 },
        { nome: 'leite', valor: 5 },
        { nome: 'doces', valor: 1.5 },
        { nome: 'carne', valor: -20 }
    ],
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    },
    _filaDeEspera: 5, // dessa forma o valor fica público e não protegido, por isso é mais vantajoso usar classes
    get filaDeEspera() {
        return this._filaDeEspera;
    },
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
};
const padaria3 = new EstabelecimentoBase('Rua Dos Laranjais, 1230, bloco A', 'alimentação', [
    { nome: 'banana', valor: 8 },
    { nome: 'beijinho', valor: 10 },
    { nome: 'carne moída', valor: 5 },
], 3);
const padaria4 = new EstabelecimentoBase('Rua Dos Morangos, 1230', 'alimentação', [], 27);
console.log(padaria);
console.log(`Produtos da padaria: ${padaria.retornaNomeDosProdutos()}`);
console.log(`Produtos da padaria 3: ${padaria3.retornaNomeDosProdutos()}`);
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria4.filaDeEspera = -100;
padaria4.filaDeEspera = 20;
console.log(padaria4.filaDeEspera);
console.log(padaria3.endereco);
console.log(padaria3.filaDeEspera);
