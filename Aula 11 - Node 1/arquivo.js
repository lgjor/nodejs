const path = require ('node:path') // Ao usarmos node: deixamos claro que queremos usar um módulo do node
const fs = require('node:fs')
const filePath = path.join(process.cwd(), 'texto.txt') // join, junta os caminhos entre vírgulas, cwd = current working directory
const fileOutPath = path.join(process.cwd(), 'textodesaida.txt') // join, junta os caminhos entre vírgulas, cwd = current working directory
const dotenv = require('dotenv')
dotenv.config()

// console.log (filePath)

// Método console.time console.timeEnd mostra o tempo decorrido entre o time e timeEnd
console.time('Manipular arquivos')

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro){
        console.error(`Erro na leitura do arquivo no caminho ${filePath}`) // console.error método correto de exibir um erro no terminal, permite um tratamento especial para essa mensagem de erro no navegador ou ferramenta utilizada
        return
    }
    // console.log(dados.toString()) // converte o arquivo de hexadecimal (buffer) para string e mostra no terminal

    // Ler as linhas do arquivo

    const texto = dados.toString()
    const linhas = texto.split('\n')
    
    // Método de alta ordem que permite pegar cada linha, cada índice de linha e a referência do array inteiro
    //
    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) =>
        `Linha ${index + 1}: ${linha}` // index + 1 para não começar na linha zero
    )
    
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {  // Join converte de array para texto novamente
        if (erro){
            console.error(`Erro na escrita do arquivo ${fileOutPath}`)
            return
        }         
    }) 
    console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
    console.timeEnd('Manipular arquivos')
})

// Método console.dir é interessante para imprimir objetos mais complexos.

// Método console.table mostra informações em formato tabular

