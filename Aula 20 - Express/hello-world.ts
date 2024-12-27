import express from 'express'
import { config } from 'dotenv'

const app = express()
const url = process.env.API_BASE_URL ?? `http://localhost`
const port = process.env.API_PORT ?? 3300

app.get('/', (request, response)cd  => {
    return response.send ('Hello World')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${url}:${port}`)

})