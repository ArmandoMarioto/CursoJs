/*
    Aula 9 - Objeto Date
 */
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras);

// console.log(data.toDateString());


// const data = new Date(2021,8,23,20,9);
const data = new Date('2021-08-23 20:12:59');
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay());


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano}    ${hora}:${min}:${seg}`;
}
const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);

