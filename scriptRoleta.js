const roleta = document.getElementById("roleta");/* Painel*/
const botao = document.getElementById("btn");/* girar*/
const btn = document.getElementById("butaozinho");
const cor = document.querySelector("body");

var
acm = 0;
fixo = 0;

function numero(min, max) {
    numerosAleatorios = (Math.floor(Math.random() * (max - min + 1)) + min);
    return numerosAleatorios;
}


function nomes() {
    if (numerosAleatorios >= 0 && numerosAleatorios <= 44) {
        return "../roleta2.0/FlappyBird-Project/FlappyBird-Project/index.html";
    }
    if (numerosAleatorios >= 45 && numerosAleatorios <= 84) {
        return "NADA";
    }
    if (numerosAleatorios >= 85 && numerosAleatorios <= 134) {
        return "../roleta2.0/mars-invaders/index.html";
    }
    if (numerosAleatorios >= 135 && numerosAleatorios <= 179) {
        return "entradaCrazyColor.html";
    }
    if (numerosAleatorios >= 180 && numerosAleatorios <= 224) {
        return "../roleta2.0/FlappyBird-Project/FlappyBird-Project/index.html";
    }
    if (numerosAleatorios >= 225 && numerosAleatorios <= 269) {
        return "escolher.html";
    }
    if (numerosAleatorios >= 270 && numerosAleatorios <= 314) {
        return "../roleta2.0/mars-invaders/index.html";
    }
    if (numerosAleatorios >= 315 && numerosAleatorios <= 360) {
        return "entradaCrazyColor.html";
    }
};

function girarPrimeiro() {
    fixo = 360 * 20;
    valorzinho = numero(0, 360);
    acm = valorzinho;

    console.log(acm);
    console.log(nomes());
}

btn.addEventListener("click", function () {
    girarPrimeiro();
    btn.setAttribute('disabled','');
    roleta.style.transform = `rotate(${fixo + acm}deg)`;

    setTimeout(function () {
        if (`${nomes()}` == "NADA") {
            cor.style.backgroundColor = "red";
            cor.style.transition="5s";
            setTimeout(function(){
                location.reload();
                
            },3010);
        } else {
            location=nomes();
        }
    }, 8000);
});