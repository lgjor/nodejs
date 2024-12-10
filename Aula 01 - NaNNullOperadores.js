let numero1
const numero2 = 3
const numero3 = 2

let soma = numero1 + numero2 //operador de soma
console.log(`Ao somar undefined com um número retorna: ${soma}`)

soma = 0 + numero2
console.log(`Ao somar null com um número 30, retorna um número: ${soma}`)

soma = 'ab' + numero2

console.log(`Ao somar uma string com um número 30, transforma o número em string e concatena: ${soma}`)

let subtracao = 'ab' - numero2

console.log(`Ao subtrair uma string da outra, ou dois tipos diferentes, retorna: ${subtracao}`)

const multiplicacao = numero2 * numero3 // Multiplicação
const divisao = numero2 / numero3 // Divisão
const elevado = numero2 ** numero3 // Potenciação
const elevadocommath = Math.pow(3, 2) // Método alternativo de potenciação
const restoDaDivisao = 3 % 2 // Resto da divisão
const numeroNegativo = -3 // Número negativo
const numeroAbsoluto = Math.abs(numeroNegativo) // Número absoluto
console.log({ multiplicacao }) // {}imprime variável como objeto
console.log({ divisao })
console.log(`${numero2} elevado a ${numero3} = ${elevado}`)
console.log(`${numero2} elevado a ${numero3} com Math.pow= ${elevadocommath}`)
console.log({ restoDaDivisao })
console.log({ numeroNegativo })
console.log({ numeroAbsoluto })