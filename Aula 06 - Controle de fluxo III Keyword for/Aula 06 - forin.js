// For in é usado para percorrer propriedades de objetos
// For in não é uma boa prática para percorrer índices de arrays, deve ser evitado

// Quando devo usar for of?
// Para manipular arrays

// Quando devo usar for in?
// Para manipular objetos

const user = {
    name: 'JoSé mArtIn SoUzA SanTos',
    email: 'JOSE.m1@gmaIl.cOm',
    age: 23,
    address: 'x street'
}

// Colocar primeira letra do nome em caixa alta, o resto em caixa baixa
// Colocar email em lowercase

for (const key in user){
    if (key === 'name') {
        const names = user[key].split(' ') // método split -> transforma uma string em um array. Nesse caso separa os nomes em um array quando houver espaço
        user[key] = '' // limpar o nome

        for (const name of names) { // percorre o array
            const nomalizedName = name.toLowerCase() // transforma o nome em caixa baixa
            const [primeiraLetra, ...restoDoNome] = nomalizedName // rest operator => selecionamos a primeira letra e colocamos o resto do nome em um array, os tres pontos indicam para pegar todos os caracteres restantes

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('') // pego o nome vazio e somo a primeira letra em caixa alta + o resto do nome, o método join indica que quero tirar do array e voltar para string
            user[key] = user[key].trim() // Métdo trim: remover espaços indevidos no início ou fim
        }
    }
    if (key === 'email') {
        user[key] = user[key].toLowerCase()
    } 
}

console.log(user)

