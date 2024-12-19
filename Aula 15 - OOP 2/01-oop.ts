// Interface é um modelo que diz quais os métodos e propriedades que deveria ter uma classe.

import { Produto } from "../Aula 14 - Orientação a objetos 1/01 - oop"

//a Interface não inclui as propriedades privadas
interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera (): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean //? opcional
}

//Ao fazer dessa forma, exige que a classe tenha as definições da interface

interface FarmaciaInterface extends EstabelecimentoInterface{
    compraRemedioPrescrito: (
        receita: ReceitaInterface,
        produtosAComprar: string[]
    ) => void
}

class Estabelecimento implements EstabelecimentoInterface {
    protected _filaDeEspera = 10

    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    public retornaNomeDosProdutos(): string[] { 
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if (fila <= 0) {
            return
        }

        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera() {
        if (this._filaDeEspera === 0) {
            return
        }

        this._filaDeEspera -= 1
    }
}

//Extends significa que estou herdando coisas de uma classe principal
class Farmacia extends Estabelecimento implements FarmaciaInterface {
    
    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Remedio[],
        filaDeEspera?: number //? pode ou não ser passado
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface,
        produtosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome)
        )
         
        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os remédios em estoque')
        }
        
        const remediosAutorizados = remediosDisponiveis.filter(
            produto =>  
                !produto.receitaObrigatoria ?  true : 
                receita.remedios.includes(produto.nome)
        )
        
            console.log({remediosDisponiveis})
            console.log({remediosAutorizados})
        }

}


const superercado = new Estabelecimento(
    'Rua Dos Laranjais, 1230, bloco A',
    'alimentação',
    [
        {nome:'banana', valor: 8},
        {nome:'beijinho', valor: 10},
        {nome:'carne moída', valor: 5},
    ],
    25
)

const farmaciaDoZe = new Farmacia(
    'Rua Azul, 1230',
    'farmaceutico',
    [
        {nome:'aspirina', valor: 8},
        {nome: 'creme hidratante', valor: 19.99},
        {nome:'remédio controlado 1', valor: 80, receitaObrigatoria: true},
        {nome:'remédio controlado 2', valor: 120, receitaObrigatoria: true},
        {nome:'vitamina c', valor: 5},
    ],
    25
)

farmaciaDoZe.compraRemedioPrescrito({
    remedios:['remédio controlado 1'],
    identificacaoDoMedico: '123-456-111',
    }, ['aspirina', 'remédio controlado 1', 'shampoo']
)