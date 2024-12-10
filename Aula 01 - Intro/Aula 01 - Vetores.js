// Declarando lista de alunos
//ao invés de:
//const aluno1 = "Joana"
//const aluno2 = "Cássia"
//const aluno 3 = "Kevin"
//podemos utilizar a estrutura de dados [ a, b, c, ..]:
//Em Javascript um array, um vetor, uma lista pode conter tipos diferentes, como um NaN, uma String, um Número real
//Porém, é recomedado usar sempre o mesmo tipo, informações relacionadas

const nomeDeAlunos = ["Joana", "Cássia", "Kevin"]
const numerosPrimos = [1, 2, 3, 5, 7]

console.log(nomeDeAlunos)
console.log(numerosPrimos)

// Toda vez que abrimos uma chave em javascript, estamos criando um escopo
// Poderemos visualizar escopos mais internos, mas, não mais externos

// { const nomesForadoEscopo = ["Joana", "Cássia", "Kevin"] }
// console.log(nomesForadoEscopo) 

// Irá retornar o erro: ReferenceError: nomesForadoEscopo is not defined

