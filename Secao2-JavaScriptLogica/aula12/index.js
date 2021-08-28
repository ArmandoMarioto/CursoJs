/*
Aula 12 - Diferença de Let e Var;
 */
// let tem escopo de bloco {..... bloco}
const verdadeira = true;
let nome = 'Armando'; // criando
var nome2 = 'Armando';


var nome2 ='Marioto';
console.log(nome);
if(verdadeira){
    let nome = 'Otavio';  // criando
    console.log(nome,nome2);
    if(verdadeira){
        let nome = 'Qualquer coisa';
        console.log('ok');
    }
}
