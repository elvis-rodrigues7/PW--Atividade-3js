let ter1 = document.querySelector('#num_1');
let ter2 = document.querySelector('#num_2');
let resultado = document.querySelector('.resultado');
let botao = document.querySelector('.b_soma')

botao.addEventListener('click', somar);

function somar(){
    let ter_1 = Number(ter1.value);
    let ter_2 = Number(ter2.value);
    let soma = ter_1 + ter_2;

    resultado.textContent = soma;
}

