/*
Aula 4 - if e else

Entre 0 - 11 Bom dia
Entre 12 - 17 Boa tarde
Entre 17 - 23 Boa noite
*/

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!!!');
} else if(hora >= 12 && hora <= 17 ){
    console.log('Boa Tarde!!!')
}else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite');
}else{
    console.log('Olaá!!!');
}

const tenhoGrana = true;

if(tenhoGrana){
    console.log('Vou sair de casa!');
}else{
    console.log('Não vou sair de casa!');
}
