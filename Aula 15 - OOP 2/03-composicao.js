"use strict";
// mixins
// https://www.typescriptlang.org/docs/handbook/mixins.html
Object.defineProperty(exports, "__esModule", { value: true });
// Superclasses
function MixinVoa(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        voa() {
            console.log(`${this.name} voou.`);
        }
    };
}
function MixinNada(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        nadar() {
            console.log(`${this.name} nadou.`);
        }
    };
}
function MixinAnda(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        anda() {
            console.log(`${this.name} andou.`);
        }
    };
}
// Método 2 declaração classe
class Animal {
    constructor({ name, idadeEmMeses }) {
        this.name = name;
        this.idadeEmMeses = idadeEmMeses;
    }
    come() {
        console.log(`${this.name} se alimentou: NHAC!`);
    }
}
class AnimalVoadorAndadorNadador extends MixinNada(MixinAnda(MixinVoa(Animal))) {
}
const cachorro = new Animal({ name: 'Mel', idadeEmMeses: 10 });
const mosca = new (MixinVoa(Animal))({ name: 'Mosca X', idadeEmMeses: 0.1 });
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({ name: 'Zé', idadeEmMeses: 36 });
const pato2 = new AnimalVoadorAndadorNadador({ name: 'Zéquinha', idadeEmMeses: 6 });
cachorro.come();
mosca.come();
mosca.voa();
pato.anda();
pato.come();
pato2.anda();
