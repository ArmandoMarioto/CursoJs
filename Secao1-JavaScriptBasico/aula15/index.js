// Aula 15 - Arrays

const alunos = [ 'Luiz','Maria','João'];
console.log(alunos);

alunos[3] = 'Luiza';
console.log(alunos);
alunos[alunos.length] = 'Marioto';
console.log(alunos);



alunos.push('Neto'); // insere na ultima posição
console.log(alunos);

alunos.unshift('Rogeiro') // insere na primeira posição
alunos.unshift('Fernanda')
console.log(alunos);

let removido = alunos.pop();//remove da ultima posição
console.log(alunos);
 removido = alunos.shift();//remove da primeira posição
console.log(alunos);




