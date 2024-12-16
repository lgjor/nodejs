// O luxon é uma biblioteca para lidar com datas dentro do javascript/node js
// npm -i luxon
// npm docs luxon

// Timestamp: Forma de representar datas por números, começa a marcar a partir de janeiro de 1970

const { DateTime, Interval } = require('luxon')

const agora = DateTime.now()

console.log(agora.month)

// Ao utilizar a api nativa do javascript, começa a contar pelo mês zero
// Por esse motivo é mais simples usar o luxon
// Exemplo, retornando o mês atual:
console.log(new Date().getMonth())
console.log(new Date().toLocaleString())  // padrão é o locale do computador
console.log(new Date().toLocaleString('en-US'))

// Calcular diferenças de datas

// Idade a partir da data aniversário

const dataDoAniversario = DateTime.fromFormat('20/06/1983', 'dd/MM/yyyy')
console.log(dataDoAniversario.day)
console.log(dataDoAniversario.month)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(Math.floor(idade)) // Math.floor arrendondo para baixo

// Convertendo formmatos

const IsoDate = '2020-11-19T21:22:00-0300'
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromISO(IsoDate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())