"use strict";
class Carro {
    /* Sua solução aqui */
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    info() {
        const returnedInfo = `${this.modelo} ${this.cor} ano ${this.ano}`;
        console.log(returnedInfo);
    }
}
const fusca = new Carro('Uno', 1990, 'vermelho');
console.log(`${fusca.info()}`);
