/* 
Aula 13 - Atribuição via desestruturação

 ... rest
 ... spread
*/

// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [1,2,3];
// [a,b,c] = numeros;  //desestruturação 

// const letras = [b,c,a];
// [a ,b ,c ] =  letras;
// console.log(a,b,c);



const numeros  = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const primeiroNumero = numeros[0];
// const [primeiroNumero,segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

const [um,,tres,,cinco,,sete, ...resto] = numeros;
console.log(um, tres,cinco,sete);