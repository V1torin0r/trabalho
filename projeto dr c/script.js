document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section .content');

    const checkVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Verifica se a seção está visível na tela
            if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Verifica a visibilidade ao carregar a página e ao rolar
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Verifica a visibilidade inicial
});

// **************funções da primeira imagem**************
function highlightContent() {

    const image1 = document.querySelector('#img1');
    const body = document.body;

    // Adiciona a classe 'destacada' à imagem
    image1.classList.add('highlight1');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');


}

function destacarImagem1() {

    // Cria o texto abaixo da imagem
    const textoDestacado = document.createElement('div');
    textoDestacado.className = 'texto-destacado';
    textoDestacado.textContent = 'Texto abaixo da imagem';
    document.body.appendChild(textoDestacado);

    // Exibe o texto com transição suave
    setTimeout(() => {
        textoDestacado.style.display = 'block';
        textoDestacado.style.opacity = '1';
    }, 10); // Pequeno delay para garantir que o CSS seja aplicado

    // Adiciona um evento de clique fora da imagem para retornar ao normal
    document.addEventListener('click', function foraDoClique(event) {
        if (!img1.contains(event.target)) {
            img1.classList.remove('highlight1');
            textoDestacado.style.opacity = '0'; // Faz o texto desaparecer suavemente

            // Remove o texto após a transição
            setTimeout(() => {
                textoDestacado.remove();
            }, 500); // Tempo igual à duração da transição

            document.removeEventListener('click', foraDoClique);
        }
    });
}

// **************funções da segundaa imagem**************
function highlightContent2() {

    const image1 = document.querySelector('#img2');
    const body = document.body;

    // Adiciona a classe 'destacada' à imagem
    image1.classList.add('highlight2');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');


}

function destacarImagem2() {

    // Cria o texto abaixo da imagem
    const textoDestacado = document.createElement('div');
    textoDestacado.className = 'texto-destacado';
    textoDestacado.textContent = 'Texto abaixo da imagem';
    document.body.appendChild(textoDestacado);

    // Exibe o texto com transição suave
    setTimeout(() => {
        textoDestacado.style.display = 'block';
        textoDestacado.style.opacity = '1';
    }, 10); // Pequeno delay para garantir que o CSS seja aplicado

    // Adiciona um evento de clique fora da imagem para retornar ao normal
    document.addEventListener('click', function foraDoClique(event) {
        if (!img2.contains(event.target)) {
            img2.classList.remove('highlight2');
            textoDestacado.style.opacity = '0'; // Faz o texto desaparecer suavemente

            // Remove o texto após a transição
            setTimeout(() => {
                textoDestacado.remove();
            }, 500); // Tempo igual à duração da transição

            document.removeEventListener('click', foraDoClique);
        }
    });
}


// **************funções da terceira imagem**************
function highlightContent3() {

    const image1 = document.querySelector('#img3');
    const body = document.body;

    // Adiciona a classe 'destacada' à imagem
    image1.classList.add('highlight3');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');


}

function destacarImagem3() {

    // Cria o texto abaixo da imagem
    const textoDestacado = document.createElement('div');
    textoDestacado.className = 'texto-destacado';
    textoDestacado.textContent = 'Texto abaixo da imagem';
    document.body.appendChild(textoDestacado);

    // Exibe o texto com transição suave
    setTimeout(() => {
        textoDestacado.style.display = 'block';
        textoDestacado.style.opacity = '1';
    }, 10); // Pequeno delay para garantir que o CSS seja aplicado

    // Adiciona um evento de clique fora da imagem para retornar ao normal
    document.addEventListener('click', function foraDoClique(event) {
        if (!img3.contains(event.target)) {
            img3.classList.remove('highlight3');
            textoDestacado.style.opacity = '0'; // Faz o texto desaparecer suavemente

            // Remove o texto após a transição
            setTimeout(() => {
                textoDestacado.remove();
            }, 500); // Tempo igual à duração da transição

            document.removeEventListener('click', foraDoClique);
        }
    });
}


// **************funções da quarta imagem**************
function highlightContent4() {

    const image1 = document.querySelector('#img4');
    const body = document.body;

    // Adiciona a classe 'destacada' à imagem
    image1.classList.add('highlight4');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');


}

function destacarImagem4() {

    // Cria o texto abaixo da imagem
    const textoDestacado = document.createElement('div');
    textoDestacado.className = 'texto-destacado';
    textoDestacado.textContent = 'Texto abaixo da imagem';
    document.body.appendChild(textoDestacado);

    // Exibe o texto com transição suave
    setTimeout(() => {
        textoDestacado.style.display = 'block';
        textoDestacado.style.opacity = '1';
    }, 10); // Pequeno delay para garantir que o CSS seja aplicado

    // Adiciona um evento de clique fora da imagem para retornar ao normal
    document.addEventListener('click', function foraDoClique(event) {
        if (!img4.contains(event.target)) {
            img4.classList.remove('highlight4');
            textoDestacado.style.opacity = '0'; // Faz o texto desaparecer suavemente

            // Remove o texto após a transição
            setTimeout(() => {
                textoDestacado.remove();
            }, 500); // Tempo igual à duração da transição

            document.removeEventListener('click', foraDoClique);
        }
    });
}

// ******************* video (funcoes) *****************************//


function highlightContentvid() {

    const video1 = document.querySelector('#videor');
    const body = document.body;

    // Adiciona a classe 'destacada' à imagem
    video1.classList.add('highlightv');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');


}

function destacarvideo() {


    // Adiciona um evento de clique fora da imagem para retornar ao normal
    document.addEventListener('click', function foraDoClique(event) {
        if (!vivi.contains(event.target)) {
            vivi.classList.remove('highlightv');

            document.removeEventListener('click', foraDoClique);
        }
    });
}