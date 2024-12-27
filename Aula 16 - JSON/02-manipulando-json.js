"use strict";
// Stringify JSON para string
// Parse string para JSON
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_json_1 = __importDefault(require("./produtos.json"));
// import fs from 'node:fs' Posso importar todo o FS ou apenas a função de escrever arquivo:
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
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
], null, 0); // ,null,2 Melhora a formatação do arquivo JSON gerado com a identação 2, porém uma boa prática é manter o padrão, pois o arquivo gerado será menor com menos espaçamentos.
// Listando todos os produtos
console.log(produtos_json_1.default);
// Listando nome dos produtos
produtos_json_1.default.forEach(product => console.log(product.name));
const fileOutPath = node_path_1.default.join(__dirname, 'generatedproducts.json');
// Método usado ao importar todo o FS
// fs.writeFileSync(fileOutPath, productJSON)
// Método usado importando apenas a função de escrever arquivos do FS
(0, node_fs_1.writeFileSync)(fileOutPath, productJSON);
