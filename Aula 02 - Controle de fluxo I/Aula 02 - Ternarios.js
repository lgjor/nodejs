// Atribuição condicional
// O valor de uma variável depende do valor de outras

const idade = 19
const temCNH = true
const podeDirigir = idade > 18 && temCNH
let numeroDePassageiros = 0

if (podeDirigir) {
    console.log('Pessoa está habilitada para conduzir veículo')
    numeroDePassageiros = 4
    } 
    else {
        console.log('Pessoa não está habilitada')
    }

console.log ( {numeroDePassageiros} )