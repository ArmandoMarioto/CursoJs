// Aula 14 - Exercicios com numbers e Math

let numero = Number(prompt('Digite um número.'));
const numeroTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
text.innerHTML = '';
text.innerHTML += `<p>Seu número + 2 é ${numero + 2}</p>`;
text.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>${numero} é inteiro :${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>Trucamento do número: ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Arrendondamento do número é : ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;