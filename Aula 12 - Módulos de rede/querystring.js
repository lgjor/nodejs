// Permite mudar o URL com atributos de forma que essa url de busca personalizada em um site, por exemplo, possa ser compartilhada com outros usuários.
// Módulo URL do node nos dá algumas informações a mais, permite manipular a url inteira, e montá-la de acordo com classes, útil para gerar uma nova url

const querystring = require('node:querystring') //usar novo módulo nativo do node
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: "Rio de Janeiro",
    periodo: "verão"
})


const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

// transforma de volta de uri para objeto, permitindo que trabalhemos com esss dados
const parsedUri = querystring.parse(uri) 

console.log(uri)
console.log(parsedUri)
console.log(parsedUri.destino)
console.log(url.parse(fullUrl)) 

// Para strings usamos o escape
const uri2 = querystring.escape('São Paulo')
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)