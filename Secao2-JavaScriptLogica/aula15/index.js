/**
 * Aula 15 - For Classíco - Estrutura de repetição;
 */

// for(let i = 0 ; i < 10 ; i++){
//     console.log('Linha : ',i);
// }


for(let i = 0 ; i <= 10 ; i++){
    const par = i % 2 === 0 ? 'par' : 'Impar';
    console.log(i ,' é ',par);
}