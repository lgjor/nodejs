// Controle de fluxo, algumas instruções são executadas apenas se determinadas condições são atendidas

const numero1 = 100;
const numero2 = 20;

if ( numero1 > 1 ){ //maior
    console.log('Este número é maior que 1')
}
if (numero1 > 200){ //maior igual. Nem todo if requer um else
    console.log('Este número é maior que 200')
}
else{ // Mas, o else é uma estrutura condicional que só existe após o if
    console.log('Este número é menor ou igual a 200')
}

if ( numero2 < numero1 ) { // menor
    console.log(`${numero2} é menor que${numero1}`)
}

if ( numero2 <= numero1 ) { //menor ou igual
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}

if (numero1 === numero2) {
    console.log('Os números são iguais')
}