let display = document.getElementById('display');

let minutos = document.getElementById('minutos');

let segundos = document.getElementById('segundos');

let comecar = document.getElementById('comecar');

let cronometroSeg;
let minutoAtual;
let interval;

// rodar dois loopings


//looping pro minutos
for (let i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

//looping pro segundos
for (let i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}


//evento de click

comecar.addEventListener('click', function() {
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function() {
        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                alert('Acabou!');
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    }, 1000);
})