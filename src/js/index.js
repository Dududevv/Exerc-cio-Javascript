const imagens = document.querySelectorAll(".slide");

const setaEsquerda = document.getElementById("seta-esquerda");

const setaDireita = document.getElementById("seta-direita"); 

let imagemAtual = 0;

setaDireita.addEventListener("click",  () => {
    if (imagemAtual === imagens.length - 1) {
        return;
    }

    esconderImagemAberta();

    imagemAtual++;

    imagens[imagemAtual].classList.add("aparecer");

    mostrarEsconderSeta();
});

setaEsquerda.addEventListener("click", function () {
    if (imagemAtual === 0) {
        return;
    }

    esconderImagemAberta();

    imagemAtual--;

    imagens[imagemAtual].classList.add("aparecer");

    mostrarEsconderSeta();
});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".aparecer");
    imagemAberta.classList.remove("aparecer");
}

function mostrarEsconderSeta() {
    const naoEhAPrimeiraImagem = imagemAtual !== 0;

    if (naoEhAPrimeiraImagem) {
        setaEsquerda.classList.remove("opacidade");
    } else {
        setaEsquerda.classList.add("opacidade");
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1

    if (ultimaImagem) {
        setaDireita.classList.add("opacidade");
    } else {
        setaDireita.classList.remove("opacidade");
    }
}
