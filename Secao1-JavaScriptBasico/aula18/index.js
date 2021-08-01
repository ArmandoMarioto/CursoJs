// Aula 18 - Valores primitivos e valores por referencia

/*
    Primitivos - strinf , number , boolean , undefined , null,(bigint, symbol)

    Referencia (mutavel) - array, objecct, function
 */

let a = "A";
let b = a; //copia

console.log(a, b);

a = "Outra coisa";
console.log(a, b);

let c = [1, 2, 3];
let d = c;
console.log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);
