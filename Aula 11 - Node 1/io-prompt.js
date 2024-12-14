// Como receber informações do usuário por meio do teclado
// Como fazer perguntas em sequência sem cair no callback hell
//
// prompt: método de interagir com usuário
// Método io é nativo do node
//
// Biblioteca readline
// Criar uma interface para interagir com usuário

const rl = require('readline')

// Criando entrada de dados pelo teclado
const prompt = rl.createInterface({
    input: process.stdin, // process: variável global do node, stdin - entrada padrão pelo teclado no terminal
    output: process.stdout
})

// Callback é a resposta da query, nesse caso, será do tipo string
// ao fazer múltiplas querys, gera um callback hell
// Quando tenho muitas perguntas, gera muito aninhamento, ficando difícil de trabalhar
// prompt.question('Qual seu número favorito: ' , (resposta) => { 

//     console.log(`O dobro do seu número favorito é: ${ parseInt(resposta) * 2 }`)
    
//     prompt.question('Qual sua cor favorita: ' , (resposta) => { 
//         console.log(`Sua cor favorita é: ${ resposta }`)
//         prompt.close() //console log precisa ser fechado dentro da chave, se for fechado fora não irá esperar o callback

//     }) 
// })

// Para deixar o código mais legível, é possível criar uma promisse
// Podemos criar uma promise para aguardar o valor da execução dela
// Dessa forma criamos um prompt assíncrono
// também poderia ser usado o than para colocar as perguntas em sequência

const promptPromise = {
    question: (pergunta) => new Promise( (resolve, reject) => { // Question é uma pergunta que retorna uma nova promise
        try { // Em try eu faço uma pergunta genérica e resolvo uma resposta
            prompt.question((pergunta), (resposta) => resolve(resposta)) 
        } 
        catch (error) { // Em catch eu retorno um erro caso não tenha reposta adequada
            reject(error)
        }
    }),
    close: () => prompt.close() // Criada uma nova função que chama a função original de close com todas suas referências e dependências
}

async function askUser () {
    const numero = await promptPromise.question('Qual seu número favorito: ')
    console.log(`O dobro do seu número favorito é: ${ parseInt(numero) * 2 }`)

    const cor = await promptPromise.question('Qual sua cor favorita: ')
    console.log(`Sua cor favorita é: ${ cor }`)

    promptPromise.close()
}

askUser()