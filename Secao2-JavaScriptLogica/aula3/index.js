/*
Aula 3 - Avaliação de Curto-Circuito

FALSY
false
'' "" ``
null / undefined
NaN


*/

console.log('Armando' && true && 'Marioto');// caso true retorna o ultimo valor
console.log('Armando' && '' && 'Marioto');// caso true retorna o ultimo valor

function falaOi(){
    return 'oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());


let corUsuario = 'vermelho';
let corPadrao = corUsuario || 'preto';

console.log(corPadrao);

corUsuario = '';
corPadrao = corUsuario || 'preto';

console.log(corPadrao);




