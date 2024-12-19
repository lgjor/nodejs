// Método 01 mais verboso declaração classe
// class Animal {
//     public nome: string
//     public idadeEmMeses: number
//     constructor(nome: string, idadeEmMeses: number){
//         this.nome = nome
//         this.idadeEmMeses = idadeEmMeses
//     }
// }

interface AnimalInterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

// Método 2 declaração classe
class Animal implements AnimalInterface {
    constructor(public nome: string, public idadeEmMeses: number) {}

    comer (): void {
        console.log(`${this.nome} se alimentou: NHAC!`)
    }

    andar (): void{
        console.log(`${this.nome} andou`)
    }
}

class AnimalVoador extends Animal implements AnimalInterface {
    constructor(
        public name: string,
        public idadeEmMeses: number,
        public penas?: boolean //? === opcional
    ){
        super(name, idadeEmMeses) // O super é o constructor da classe pai definida no extends
    }

    voa() {
        console.log (`${this.nome} voou.`)
    }
}

const cachorro = new Animal('Mel', 10)
const mosca = new AnimalVoador('Mosca X', 0.1, false)
const pato = new AnimalVoador('ADA', 5)
cachorro.comer()
mosca.comer()
mosca.voa()
