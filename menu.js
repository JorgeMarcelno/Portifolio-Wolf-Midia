let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.querySelector('.btn-fechar')

const elemento = document.getElementById('text-topo-dinamic');
const palavras = ["TRANSFORMA MOMENTOS EM ARTE.", "FOTOGRAFIA & VÍDEO.", "DESIGN GRÁFICO.", "EDIÇÃO DE VÍDEOS."];
let indexPalavra = 0;
let indexLetra = 0;
let apagando = false;

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})


function animacaoDigito() {
    const palavraAtual = palavras[indexPalavra];
    
    if (apagando) {
        elemento.textContent = palavraAtual.substring(0, indexLetra - 1);
        indexLetra--;
    } else {
        elemento.textContent = palavraAtual.substring(0, indexLetra + 1);
        indexLetra++;
    }

    // Velocidade: mais lento a escrever, mais rápido a apagar
    let velocidade = apagando ? 150 : 200;

    // Se terminou de escrever a palavra
    if (!apagando && indexLetra === palavraAtual.length) {
        velocidade = 2000; 
        apagando = true;
    } 
    // Se terminou de apagar a palavra
    else if (apagando && indexLetra === 0) {
        apagando = false;
        indexPalavra = (indexPalavra + 1) % palavras.length; 
        velocidade = 500;
    }

    setTimeout(animacaoDigito, velocidade);
}

// Iniciar a animação
animacaoDigito();