// Atribuição condicional
// O valor de uma variável depende do valor de outras

const idade = 19
const temCNH = true
const podeDirigir = idade > 18 && temCNH
let numeroDePassageiros = 0

if (podeDirigir) {
    console.log('Pessoa está habilitada para conduzir veículo')
    } 
    else {
        console.log('Pessoa não está habilitada')
    }

console.log ( {numeroDePassageiros} )

const numeroDePassageiros = podeDirigir ? 4 : 0
// onde: ? verdadeiro : falso
// ou seja, podeDirigir for vdd recebe 4
// se podeDirigir for falso recebe 0

//escrever a ternária acima é o mesmo que:
//if (podedirigir) {
//numeroDePassageiros = 4
//} else {
//      numeroDePassageiros = 0
//}

