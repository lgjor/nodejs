// Não está disponível por padrão nas versões mais antigas do node, nas mais novas há uma referência ao fetch.
// A partir do node 18, já temos acesso ao node fetch

// Método 01 then
fetch('http://localhost:3000').then(
    response => response.text()
    .then(data => console.log(data))
)

// Método 02 função async
async function makeRequest () {
    const response = await fetch('http://localhost:3000')
    const data = await response.text()
    
    console.log(data)
}

makeRequest()