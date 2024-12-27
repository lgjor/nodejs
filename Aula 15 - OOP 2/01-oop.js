"use strict";
// Interface é um modelo que diz quais os métodos e propriedades que deveria ter uma classe.
Object.defineProperty(exports, "__esModule", { value: true });
class Estabelecimento {
    constructor(endereco, setor, produtos, filaDeEspera) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this._filaDeEspera = 10;
        this.filaDeEspera = filaDeEspera !== null && filaDeEspera !== void 0 ? filaDeEspera : this._filaDeEspera;
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
        if (this._filaDeEspera === 0) {
            return;
        }
        this._filaDeEspera -= 1;
    }
}
//Extends significa que estou herdando coisas de uma classe principal
class Farmacia extends Estabelecimento {
    constructor(endereco, setor, produtos, filaDeEspera //? pode ou não ser passado
    ) {
        super(endereco, setor, produtos, filaDeEspera);
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    compraRemedioPrescrito(receita, produtosAComprar) {
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome));
        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os remédios em estoque');
        }
        const remediosAutorizados = remediosDisponiveis.filter(produto => !produto.receitaObrigatoria ? true :
            receita.remedios.includes(produto.nome));
        console.log({ remediosDisponiveis });
        console.log({ remediosAutorizados });
    }
}
const superercado = new Estabelecimento('Rua Dos Laranjais, 1230, bloco A', 'alimentação', [
    { nome: 'banana', valor: 8 },
    { nome: 'beijinho', valor: 10 },
    { nome: 'carne moída', valor: 5 },
], 25);
const farmaciaDoZe = new Farmacia('Rua Azul, 1230', 'farmaceutico', [
    { nome: 'aspirina', valor: 8 },
    { nome: 'creme hidratante', valor: 19.99 },
    { nome: 'remédio controlado 1', valor: 80, receitaObrigatoria: true },
    { nome: 'remédio controlado 2', valor: 120, receitaObrigatoria: true },
    { nome: 'vitamina c', valor: 5 },
], 25);
farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456-111',
}, ['aspirina', 'remédio controlado 1', 'shampoo']);
