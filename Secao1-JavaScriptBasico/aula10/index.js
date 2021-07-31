// Aula 10 - Mais sobre strings


let umaString  = 'Um texto'

console.log(umaString.search(/x/)); // retorna o index
console.log(umaString.replace('Um','Outra')); // busca o Um na frase e muda por Outra
console.log(umaString.replace(/Outra/,'Um')); // busca o Outra na frase e muda por Um
console.log(umaString.replace(/t/g,'#')); // muda todos os t por #

console.log(umaString.slice(1,4)); // pega a string do 1 ao 4 



