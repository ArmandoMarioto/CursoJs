/*
Aula 2 - Operadores Lógicos
&&  AND
||  OR
!   NOT
*/

//AND todas tem que ser verdadeiro para retorna TRUE
console.log(true && true);
console.log(true && false);

//OR se uma for True , rertorna TRUE
console.log(true || false);
console.log(false || false);

//NOT nega o verdadeiro ou falso
console.log(!true);
console.log(!false);


const usuario = 'Armando'
const senha = '123456'


const vaiLogar = usuario === 'Armando' && senha === '123456'

console.log(vaiLogar ? 'Logouuu': 'Senha ou login errado');

