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