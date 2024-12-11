// Forma performática e rápida de fazer loops
// Perde em legibilidade, é algo mais impertivo
const listaDeNumeros = [0, 111, 155, 555, 222, -23, -56]
const listaDeUsuarios = ['José', 'Antônio', 'Paula']

// Primeiro exemplo
console.log('Contando de zero até cem: \n')
for (let contador = 0; contador <100; contador++) {
    console.log(contador)
}

console.log(' \n')

console.log('Exibindo lista de números: \n')
for (let contador = 0; contador < listaDeNumeros.length; contador++) {
    console.log(listaDeNumeros[contador])
}

console.log(' \n')

console.log('Usando numero como indice: \n')
for (const i of listaDeNumeros) {
    console.log(i)
}

console.log(' \n')

// Boa prática de declaração de variáveis no for of
console.log('Listando usuários da lista: \n')
for (const usuario of listaDeUsuarios) {
    console.log(usuario)
}

console.log(' \n')
