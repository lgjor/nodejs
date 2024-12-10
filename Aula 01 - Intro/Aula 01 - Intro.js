//Aula 01 - Introdução

// Hoisting: Ao imprimir ou utilizar uma variável do tipo var não declarada,
// retorna o valor undefined. Essa prática deve ser evitada, usar let, ao invés de var.
// Hoisting: Toda vez que declaramos uma variável como var,
// o javascript cria um espaço na memória undefined no início da execução do programa.

console.log(`Imprimindo uma var não inicializada, antes de sua declaração: ${numerovar}`)
var numerovar = 23 //Prática ruim de declaração de variável
var varhoisting // Hoisting: ao declarar uma variável sem valor irá retornar undefined
console.log(`Imprimindo uma var não inicializada: ${varhoisting}`)

console.log(`Diferente de var, com let, ao imprimir ou utilizar uma variável antes de sua inicialização, irá acusar um erro:`)
console.log(`Código de exemplo:`)
console.log(`console.log(lethoistingtest) // Uso anterior à declaração`)
console.log(`let lethoistingtest // Declaração`)
console.log(` Exemplo do erro: ReferenceError: Cannot access 'lethoistingtest' before initialization`)

let numero = 20 // Declaração variável
const numeroFavorito = 5 // Declaração constante, não posso declarar constante sem inicializá-la, não posso declarar algo sem valor que nunca irá mudar.

const estaChovendo = true

const numeroInt = 5.0 // Casa decimal não relevante, número inteiro
const numeroReal = 5.5 // Casa decimal relevante, número real

const name = 'Lucas'

console.log(numero)
console.log(numeroFavorito)

console.log(`Oi ${name}! Seu número favorito é: ${numeroFavorito}`) // imprimindo uma variável entre um texto usa-se crases+${nomevariável}

console.log(`Condição do clima é chuvoso: ${estaChovendo}`)

// Undefined está mais relacionado a um comportamento não esperado, sem valor definido.
// Diferença semântica: Null indica a ausência de um objeto, Undefined indica a ausência de qualquer valor
const qualquerValor = null
console.log(`Imprime variável declarada com valor null: ${qualquerValor}`)
