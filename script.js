const botaoplaypause = document.getElementById('playpause');
const botaoproximo = document.getElementById('proximo');
const botaoanterior = document.getElementById('anterior');
const audio = document.getElementById('audiocapitulo');
const capitulo = document.getElementById('capitulo');
const play = document.getElementById('play');
const qtdcapitulos = 10;

let tatocando = false;
let capituloatual = 1;
function proxima(){
    if (capituloatual < qtdcapitulos){
        capituloatual += 1;
        audio.src = "audios/"+capituloatual+".mp3";
        console.log('clicou no proximo');
        audio.play();
        capitulo.innerText = "Capítulo "+capituloatual;
        
        
    }
    else{
        capituloatual = 1;
        audio.src = "audios/"+capituloatual+".mp3";
        audio.play();
        capitulo.innerText = "Capítulo "+capituloatual;
    }
}

function anterior(){
    if (capituloatual === 1){
        capituloatual = qtdcapitulos;
        audio.src = "audios/"+capituloatual+".mp3";
        console.log('clicou no anterior');
        audio.play();
        capitulo.innerText = "Capítulo "+capituloatual;
        
    }
    else{
        capituloatual -= 1;
        audio.src = "audios/"+capituloatual+".mp3";
        audio.play();
        capitulo.innerText = "Capítulo "+capituloatual;
}
}
function tocaroupausar(){
    if(tatocando === false){
        audio.play();
        tatocando = true;
        
    }
    else{
        audio.pause();
        tatocando = false;
        
    }
}

audio.addEventListener('play', () => {
    tatocando = true;
    botaoplaypause.classList.add('tocando');
});

audio.addEventListener('pause', () => {
    tatocando = false;
    botaoplaypause.classList.remove('tocando');
});

botaoproximo.addEventListener('click', proxima);
botaoanterior.addEventListener('click', anterior);
botaoplaypause.addEventListener('click', tocaroupausar);