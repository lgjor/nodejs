class Carro {
	/* Sua solução aqui */
	constructor(
        public modelo: string,
        public ano: number,
        public cor: string,
     ){}
     public info(){
        const returnedInfo = `${this.modelo} ${this.cor} ano ${this.ano}`
        console.log(returnedInfo)  
     }
}

const fusca = new Carro('Uno', 1990, 'vermelho')

console.log(`${fusca.info()}`)