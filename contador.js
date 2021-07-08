window.addEventListener("load", () => {



// tempo em segundos
let sec = 360;

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(sec/60); //floor retorna o número truncado para baixo
    let segundosRestantes = sec % 60;

    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
    }
    if (min < 10) {
        min = "0" + min;

    }

    // formatando para 2:59
    countDiv.innerHTML = min + ":" + segundosRestantes;

    // condição final
    if (sec > 0) {
        sec = sec - 1;
    }
    else {
        countDiv.innerHTML = "Acabou!";
    }
};

const countDown = setInterval(() => secpass(), 1000);

});