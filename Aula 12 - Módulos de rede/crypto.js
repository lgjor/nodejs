const crypto = require ('node:crypto')

// Gerar uma chave randômica de N = 12 caracteres
const chave = crypto.randomBytes(12).toString('hex') // toString('hex') converte o buffer gerado para hexadecimal, outro formato bastante utilizado é o base64, usado para converter imagens para uma string compreensível pelo navegador
console.log(chave)

// Gerar UUID randômico
const uuid = crypto.randomUUID()
console.log(uuid)

// Gerar uma chave pública e privada para SSH
const { privateKey, publicKey } = crypto.generateKeyPairSync(
    'rsa', { modulusLength: 2048 }
)

console.log(publicKey)
console.log(privateKey)