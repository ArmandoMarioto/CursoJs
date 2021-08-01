// Aula 17 - Objetos


const pessoa1 = {
    nome : 'Armando',
    sobrenome : 'Marioto',
    idade : 25
};

const pessoa2 = {
    nome : 'Maria',
    sobrenome : 'Clara',
    idade : 25,

    fala()
    {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);
pessoa2.fala();

function criaPessoa(nome , sobrenome , idade)
{
    return {
        nome,
        sobrenome,
        idade
    };
};


const pessoa3 = criaPessoa('Jão','Miguel',23);
const pessoa4 = criaPessoa('Jeniffer','Rangel',45);
const pessoa5 = criaPessoa('Enzo','Formola1',18);

console.log(pessoa3.nome);
console.log(pessoa4.nome);