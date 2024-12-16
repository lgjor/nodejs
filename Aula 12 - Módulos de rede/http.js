// http é um módulo nativo do node, podemos criar o servidor ou cliente
// A requisição http pode receber como respostas arquivos, obetos javascript representado pelos jsons, xmls, contendo estilos, etc..

// O módulo do node 'node mon' atualiza automaticamente sem precisar reiniciar o server
// npm -D nodemon -> instala o node mon como uma dependencia

// Extensão JSON Viewvier do chrome

// Thunder client extensão do vscode que nos ajuda a fazer requisições

const http = require('http')
const sports = ['soccer', 'volley', 'basketball', 'tennis']

const server = http.createServer(async (request, response) => {
    const { method, statusCode, url } = request

    const bodyPromise = new Promise((resolve, reject) => {
        let body 
        request.on('data', data => {
            body => JSON.parse(data)
        })

        request.on('end' , data => {
            resolve('body')
        })
    })

    if (url === '/' ) {
        response.write('<div><h1>Hello from node</h1><p>http server</p></div>')
        response.end()
        return
    }
    
    if (url === '/api/sports' ) {
        if (method === 'GET'){
            response.write(JSON.stringify(sports))
            response.end()
            return
        }
    }

    if (url === '/api/sports') {
        if (method === 'GET'){
            response.write(JSON.stringify(sports))
            response.end()
            return
        }

        if (method === 'POST'){
            const body = await bodyPromise

            const { name } = body

            if (! sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase)){
                sports.push(name.toLowerCase)
            }
            response.write(name.toLowerCase())
            response.end()
            return
        }
    }

    // Caso a rota, a página não seja encontrada, retorna uma mensagem ao invés de ficar travado carregando a página
    response.statusCode = 404
    response.write('<h1>Página não encontrada.</h1>')
    response.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000')
})