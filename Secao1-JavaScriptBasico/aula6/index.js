//Aula 6 - Exercicio - Const e Let

const nome = 'Armando';
const sobrenome = 'Marioto';
const idade = 25;
const peso = 94;
const aulturaEmM = 1.87;
let indiceMassaCorporal;
let anoNascimento ;


indiceMassaCorporal = peso/(aulturaEmM*aulturaEmM);
anoNascimento = 2021 -idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa' , peso ,'kg');
console.log('tem',aulturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento,'.');


console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${aulturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);