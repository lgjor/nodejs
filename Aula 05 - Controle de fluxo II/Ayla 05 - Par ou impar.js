// While pode ser usado até com um índice indeterminado

const listaDeNumeros = [25, 38, 88, 192, 333, 222, 10, 11, 62]

// Estruturas de dados podem ser manipuladas, mesmo sendo const. Pois, não estão sendo reatribuídas.
const listaDePares = []
const listaDeImpares = []

let i = 0

while ( i < listaDeNumeros.length) {
    if (listaDeNumeros[i] % 2 === 0) { // números divisíveis por 2 tem o resto da divisão igual a zero e são pares
        listaDePares.push(listaDeNumeros[i])
    }
    else { // números cujo resto da divisão por 2 não é zero, são ímpares
        listaDeImpares.push(listaDeNumeros[i])
    }
    i += 1;
}

console.log(`Lista de números: ${listaDeNumeros}`)
console.log(`Lista de pares: ${listaDePares}`)
console.log(`Lista de ímpares: ${listaDeImpares}`)

