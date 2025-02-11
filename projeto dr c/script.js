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

// Função para destacar a imagem e mostrar o texto
function highlightContent() {
    // Seleciona a imagem, o texto e o fundo
    const image = document.querySelector('.image');
    const text = document.querySelector('.text');
    const body = document.body;

    // Adiciona ou remove a classe 'highlight' para aplicar o efeito na imagem
    image.classList.toggle('highlight');

    // Adiciona a classe 'show-text' para tornar o texto visível
    text.classList.add('show-text');

    // Adiciona ou remove a classe 'darken' para escurecer o fundo
    body.classList.toggle('darken');
}