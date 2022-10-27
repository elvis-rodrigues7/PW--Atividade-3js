let speed = document.querySelector('#velocidade');
let t_board = document.querySelector('#placa');
let b_sub = document.querySelector('.but_sub');
let tab = document.querySelector('.tabela');
let re = document.querySelector('.result');

b_sub.addEventListener('click', analise);
b_sub.addEventListener('click', analise_110);

function analise(x) {
    if(speed.value > 60){
        var t_tr = document.createElement('tr');
        tab.appendChild(t_tr);
        var t_td1 = document.createElement('td');
        t_tr.appendChild(t_td1);
        var t_td2 = document.createElement('td');
        t_tr.appendChild(t_td2);
        var t_td3 = document.createElement('td');
        t_tr.appendChild(t_td3);

        t_td1.textContent = t_board.value;
        t_td2.textContent = speed.value;
        t_td3.textContent = "Multado!";
        x.preventDefault();
    }

    else {
        var t_tr = document.createElement('tr');
        tab.appendChild(t_tr);
        var t_td1 = document.createElement('td');
        t_tr.appendChild(t_td1);
        var t_td2 = document.createElement('td');
        t_tr.appendChild(t_td2);
        var t_td3 = document.createElement('td');
        t_tr.appendChild(t_td3);

        t_td1.textContent = t_board.value;
        t_td2.textContent = speed.value;
        t_td3.textContent = "Dentro da Normalidade";
        x.preventDefault();
    }

    
}
function analise_110(){
    if(speed.value > 60){
        re.textContent = "Multado";
    }
    else {
        re.textContent = "Dentro da Normalidade";
    }
}