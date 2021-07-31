// Aula 13 - Sobre objeto Math


let num1 = 9.54578;

// let num2 = Math.floor(num1); Trunca o numero 
// console.log(num2); // = 9

let num2 = Math.ceil(num1); //Arrendonda o numero 
console.log(num2); // = 10

let num3 = 9.51;
let num4 = 9.49;
num2 = Math.round(num3); //Arrendonda o numero ,pq é maior que metade 9.51
 console.log(num2); // = 10

num2 = Math.round(num4); //Trunca o numero , pq é menor que a metade 9.49
 console.log(num2); // = 9