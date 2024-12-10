// Percorre a lista até que determinada condição seja atendida

const listeDeContatos = ["Paulo", "Selina", "Roger", "Zeca", "Jousé", "Natália", "Bianca"]

let buscaUsuario = true
let i = 0

// método 01
// while (buscaUsuario) {
//     //se encontrar usuário
//     if (listeDeContatos[i].startsWith('Y')){
//         buscaUsuario = false
//         console.log(`Usuário encontrado ${listeDeContatos[i]}`)
//     }
//     i += 1 

//     //se não encontrar usuário
//     if (i === listeDeContatos.length) {
//         buscaUsuario = false
//         console.log(`Usuário não encontrado`)
//     }
// }

// Método 02
while (true) {
    //se encontrar usuário
    if (listeDeContatos[i].startsWith('Y')){
        console.log(`Usuário encontrado ${listeDeContatos[i]}`)
        break
    }
    i += 1 

    //se não encontrar usuário
    if (i === listeDeContatos.length) {
        console.log(`Usuário não encontrado`)
        break
    }
}
