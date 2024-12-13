// Método 03 - Do While

// O while pode ser um laço declarado que não será executado caso a condição inicial não for atendida.
// Já o Do While pode ser utilizado quando desejamos que determinada ação seja executada pelo ou menos uma vez.

const listeDeContatos = ["Paulo", "Selina", "Roger", "Zeca", "Jousé", "Natália", "Bianca"]

let buscaUsuario = true
let i = 0

do {
    //se encontrar usuário
    if (listeDeContatos[i] && listeDeContatos[i].startsWith('Z')){ // Se a lista não está vazia e começa com a letra Z
        buscaUsuario = false
        console.log(`Usuário encontrado ${listeDeContatos[i]}`)
    }
    i += 1 

    //se não encontrar usuário
    if (i >= listeDeContatos.length) {
        buscaUsuario = false
        console.log(`Usuário não encontrado`)
    }
} while (buscaUsuario)