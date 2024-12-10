// Percorre a lista até que determinada condição seja atendida

const listeDeContatos = ["Paulo", "Selina", "Roger", "Zeca", "Jousé", "Natália", "Bianca"]

// Método 01

let buscaUsuario = true
let i = 0

while (buscaUsuario) {
    //se encontrar usuário
    if (listeDeContatos[i].startsWith('Y')){
        buscaUsuario = false
        console.log(`Usuário encontrado ${listeDeContatos[i]}`)
    }
    i += 1 

    //se não encontrar usuário
    if (i === listeDeContatos.length) {
        buscaUsuario = false
        console.log(`Usuário não encontrado`)
    }
}

// Método 02 mais imperativo, menos recomendado

// while (true) {
//     //se encontrar usuário
//     if (listeDeContatos[i].startsWith('Y')){
//         console.log(`Usuário encontrado ${listeDeContatos[i]}`)
//         break // sai do loop mais interno que há nesse fluxo de execução
//     }
//     i += 1 

//     //se não encontrar usuário
//     if (i === listeDeContatos.length) {
//         console.log(`Usuário não encontrado`)
//         break
//     }
// }

