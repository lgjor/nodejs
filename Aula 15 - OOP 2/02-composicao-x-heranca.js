"use strict";
// Método 01 mais verboso declaração classe
// class Animal {
//     public nome: string
//     public idadeEmMeses: number
//     constructor(nome: string, idadeEmMeses: number){
//         this.nome = nome
//         this.idadeEmMeses = idadeEmMeses
//     }
// }
// Método 2 declaração classe
class Animal {
    constructor(nome, idadeEmMeses) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }
    comer() {
        console.log(`${this.nome} se alimentou: NHAC!`);
    }
    andar() {
        console.log(`${this.nome} andou`);
    }
}
class AnimalVoador extends Animal {
    constructor(name, idadeEmMeses, penas //? === opcional
    ) {
        super(name, idadeEmMeses); // O super é o constructor da classe pai definida no extends
        this.name = name;
        this.idadeEmMeses = idadeEmMeses;
        this.penas = penas;
    }
    voa() {
        console.log(`${this.nome} voou.`);
    }
}
const cachorro = new Animal('Mel', 10);
const mosca = new AnimalVoador('Mosca X', 0.1, false);
const pato = new AnimalVoador('ADA', 5);
cachorro.comer();
mosca.comer();
mosca.voa();
