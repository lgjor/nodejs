const dns = require ('node:dns')

const searchedUrl = 'google.com'

// método 1 mais verboso
// const ipv4 = dns.resolve4(searchedUrl, (err, addresses) => {
//     if (err) {
//         console.error('url não encontrada')
//         return
//     }
//     console.log(addresses)
// })

// método 2
async function bootstrap (){
    const searchedUrl = 'google.com'

    console.time('Pesquisando url por DNS padrão')
    const addresses = await dns.promises.resolve4(searchedUrl)
    console.timeEnd('Pesquisando url por DNS padrão')
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs) // se nameServers[1] é null ou undefined, usa o ns1

    console.time('Pesquisando url por DNS específico')
    const addressesWithResolver = resolver.resolve4(searchedUrl, (error, addresses) =>  {
        if (error) {
            console.error('Não foi possível encontrar ipv4')
        }
        console.timeEnd('Pesquisando url por DNS específico')
        console.log(addresses)
    })
}

bootstrap()