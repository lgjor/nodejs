if (true) { //se condição verdadeira, executa passos abaixo
    console.log('expressão verdadeira, sempre aparece')
}

if (false) { // se condição falsa, não executa passos abaixo
    console.log('expressão falsa, nunca aparece')
}

// or/ou: ||
//expressões com || sempre retornam verdadeiro, a menos que as TODOS as expressões sejam falsas
console.log('Testes opedaror or')
console.log (true || true) // true
console.log (true || false) // true
console.log (false || true) // true
console.log (false || false) // false
console.log( 1 < -20 || 110 < 5 || 40 > 3000 ) // false
console.log( 1 < -20 || 110 < 5 || 30 > 29 ) // true

// and/e: &&
//Só será verdadeiro se todas as expressões forem verdadeiras
console.log('testes opedaror and')
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

