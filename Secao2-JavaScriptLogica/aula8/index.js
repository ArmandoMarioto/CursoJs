/*
    Aula 8 - Operações ternária

    (condição) ? Valor verdadeiro : Valor para falso;
*/


const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);
//const corUsuario = null;
const corUsuario = Pink;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// }else{
//     console.log('Usuario normal');
// }