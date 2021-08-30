/*
    Aula 14 - Atribuição via desestruturação (Objetos)

*/

const pessoa = {
    nome : 'Armando',
    sobrenome: 'Marioto',
    idade: 30,
    endereco: {
        rua: 'Domingos Daré',
        numero : 137
    }
};

console.log(pessoa);
const nome = pessoa.nome;
console.log(nome);

// Atribuição via desestruturação
const { sobrenome = 'Qualquerr valor para PADRÂO', idade } = pessoa;
const {endereco: {rua , numero}} = pessoa;

console.log(sobrenome,idade);
console.log(rua,numero);
