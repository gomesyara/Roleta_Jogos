const plv =  document.getElementById("palavra");
const cor1 = document.getElementById("orange");
const cor2 = document.getElementById("gray");
const cor3 = document.getElementById("green");
const cor4 = document.getElementById("blue");
const cor5 = document.getElementById("red");
const cor6 = document.getElementById("magenta");
const cor7 = document.getElementById("purple");
const cor8 = document.getElementById("yellow");
const cor9 = document.getElementById("maroon");
const tempo = document.getElementById("tempo");

tempo.innerHTML="15";

const palavras = ["LARANJA","CINZA","VERDE","AZUL","VERMELHO","ROSA","ROXO","AMARELO","MARROM"];
const cores = ["orange","gray","green","blue","red","magenta","purple","yellow","maroon"];

posicaoAleatoriaPalavra = (Math.floor(Math.random() * (8 - 0 + 1)) + 0);
posicaoPalavra = posicaoAleatoriaPalavra;

posicaoAleatoriaCor = (Math.floor(Math.random()*(8 - 0 + 1)) + 0);
posicaoCor = posicaoAleatoriaCor;

plv.innerHTML=palavras[posicaoPalavra];
plv.style.color=cores[posicaoCor];

console.log(posicaoAleatoriaPalavra);
console.log(palavras[posicaoPalavra]);

console.log(posicaoAleatoriaCor);
console.log(cores[posicaoCor]);

function atualizarPalavra(){
    posicaoAleatoriaPalavra = (Math.floor(Math.random() * (8 - 0 + 1)) + 0);
    posicaoPalavra = posicaoAleatoriaPalavra;

    posicaoAleatoriaCor = (Math.floor(Math.random()*(8 - 0 + 1)) + 0);
    posicaoCor = posicaoAleatoriaCor;

    plv.innerHTML=palavras[posicaoPalavra];
    plv.style.color=cores[posicaoCor];

    console.log(posicaoAleatoriaPalavra);
    console.log(palavras[posicaoPalavra]);

    console.log(posicaoAleatoriaCor);
    console.log(cores[posicaoCor]);
}

function desabilitar(){
    cor1.setAttribute('disabled','');
    cor2.setAttribute('disabled','');
    cor3.setAttribute('disabled','');
    cor4.setAttribute('disabled','');
    cor5.setAttribute('disabled','');
    cor6.setAttribute('disabled','');
    cor7.setAttribute('disabled','');
    cor8.setAttribute('disabled','');
    cor9.setAttribute('disabled','');
    cor1.style.boxShadow="none";
    cor2.style.boxShadow="none";
    cor3.style.boxShadow="none";
    cor4.style.boxShadow="none";
    cor5.style.boxShadow="none";
    cor6.style.boxShadow="none";
    cor7.style.boxShadow="none";
    cor8.style.boxShadow="none";
    cor9.style.boxShadow="none";
    cor1.style.cursor="default";
    cor2.style.cursor="default";
    cor3.style.cursor="default";
    cor4.style.cursor="default";
    cor5.style.cursor="default";
    cor6.style.cursor="default";
    cor7.style.cursor="default";
    cor8.style.cursor="default";
    cor9.style.cursor="default";
}

var
acertos= 0 ;
erros= 0;

function acertar(){
    acertos+=1 ;
    console.log("Acerto",acertos);
}

function errar(){
    erros+=1;
    console.log("erro",erros);
}

cor1.addEventListener("click",function(){
    if(cor1.id==cores[posicaoCor]) {
        acertar();
    }else{
        errar();
    }
    atualizarPalavra();
});

cor2.addEventListener("click",function(){
    if(cor2.id==cores[posicaoCor]) {
        acertar();
    }else{
        errar();
    }
    atualizarPalavra();
});

cor3.addEventListener("click",function(){
    if(cor3.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor4.addEventListener("click",function(){
    if(cor4.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor5.addEventListener("click",function(){
    if(cor5.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor6.addEventListener("click",function(){
    if(cor6.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor7.addEventListener("click",function(){
    if(cor7.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor8.addEventListener("click",function(){
    if(cor8.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

cor9.addEventListener("click",function(){
    if(cor9.id==cores[posicaoCor]) {
        acertar();

    }else{
        errar();
    }
    atualizarPalavra();
});

setTimeout(function(){
    desabilitar();
    plv.style.color="black";
    plv.innerHTML=`Acertos: ${acertos}⠀⠀⠀Erros: ${erros}`;
},15000);

setTimeout(function(){
    if(erros==0 && acertos > 12){
        plv.innerHTML=`Parabéns!!!`;
    }else if (erros>=0 && acertos<20){
        plv.innerHTML=`Quase lá!!`;
    }
},18000);

setTimeout(function(){
    tempo.innerHTML="14";
}, 1000);

setTimeout(function(){
    tempo.innerHTML="13";
}, 2000);

setTimeout(function(){
    tempo.innerHTML="12";
}, 3000);

setTimeout(function(){
    tempo.innerHTML="11";
}, 4000);

setTimeout(function(){
    tempo.innerHTML="10";
}, 5000);

setTimeout(function(){
    tempo.innerHTML="9";
}, 6000);

setTimeout(function(){
    tempo.innerHTML="8";
}, 7000);

setTimeout(function(){
    tempo.innerHTML="7";
}, 8000);

setTimeout(function(){
    tempo.innerHTML="6";
}, 9000);

setTimeout(function(){
    tempo.innerHTML="5";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 10000);

setTimeout(function(){
    tempo.innerHTML="4";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 11000);

setTimeout(function(){
    tempo.innerHTML="3";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 12000);

setTimeout(function(){
    tempo.innerHTML="2";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 13000);

setTimeout(function(){
    tempo.innerHTML="1";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 14000);

setTimeout(function(){
    tempo.innerHTML="0";
    tempo.style.color="red";
    tempo.style.borderColor="red";
}, 14999);