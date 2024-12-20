// Stringify JSON para string
// Parse string para JSON

import products from './produtos.json'
// import fs from 'node:fs' Posso importar todo o FS ou apenas a função de escrever arquivo:
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const productJSON = JSON.stringify([
    {
        "amountInStock": 500,
        "name": "T-shirt",
        "unitValue": 45
    },

    {
        "name": "Pair of Socks",
        "amountInStock": 100,
        "unitValue": 5
      }
],null,0) // ,null,2 Melhora a formatação do arquivo JSON gerado com a identação 2, porém uma boa prática é manter o padrão, pois o arquivo gerado será menor com menos espaçamentos.

// Listando todos os produtos
console.log(products)

// Listando nome dos produtos
products.forEach( product => console.log(product.name))

const fileOutPath = path.join(__dirname, 'generatedproducts.json')

// Método usado ao importar todo o FS
// fs.writeFileSync(fileOutPath, productJSON)

// Método usado importando apenas a função de escrever arquivos do FS
writeFileSync(fileOutPath, productJSON)
