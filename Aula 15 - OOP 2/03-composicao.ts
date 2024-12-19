// mixins
// https://www.typescriptlang.org/docs/handbook/mixins.html

type Constructor = new ( ...args: any[] ) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{name: string, idadeEmMeses: number}>

// Superclasses
function MixinVoa<TBase extends AnimalProps> (superClasse: TBase){
    return class extends superClasse{
        constructor(...args: any){
            super(args[0])
        }
        voa() {
            console.log (`${this.name} voou.`)
        }
    }
}

function MixinNada<TBase extends AnimalProps> (superClasse: TBase){
    return class extends superClasse{
        constructor(...args: any){
            super(args[0])
        }
        nadar() {
            console.log (`${this.name} nadou.`)
        }
    }
}

function MixinAnda<TBase extends AnimalProps> (superClasse: TBase){
    return class extends superClasse{
        constructor(...args: any){
            super(args[0])
        }
        anda() {
            console.log (`${this.name} andou.`)
        }
    }
}

interface AnimalInterface {
    name: string
    idadeEmMeses: number
    come: () => void
}

// Método 2 declaração classe
class Animal implements AnimalInterface {
    public name: string
    public idadeEmMeses: number
    constructor({name, idadeEmMeses} : {name: string, idadeEmMeses: number}) {
        this.name = name
        this.idadeEmMeses = idadeEmMeses
    }

    come (): void {
        console.log(`${this.name} se alimentou: NHAC!`)
    }

}

class AnimalVoadorAndadorNadador extends MixinNada(MixinAnda(MixinVoa(Animal))) {}

const cachorro = new Animal({name: 'Mel', idadeEmMeses: 10})
const mosca = new ( MixinVoa(Animal) ) ({name: 'Mosca X', idadeEmMeses: 0.1})
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({name: 'Zé', idadeEmMeses: 36})

const pato2 = new AnimalVoadorAndadorNadador({name: 'Zéquinha', idadeEmMeses: 6})

cachorro.come()
mosca.come()
mosca.voa()
pato.anda()
pato.come()
pato2.anda()

export{} // Este projeto não será exposto para fora, não exporta nada