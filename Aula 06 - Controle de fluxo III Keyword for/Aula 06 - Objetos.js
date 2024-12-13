// Declaração de objeto

const animal = {
    especie: 'Canis Lupus',
    habitat: 'Florestas dos EUA',
    expectativaDeVida: 20,
    terrestre: true
}

console.log(animal)

console.log(`População: ${animal.terrestre}`)
console.log(`Espécie: ${animal.especie}`)

animal.populacao = 100_000_000

console.log(`População: ${animal.populacao}`)