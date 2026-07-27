// 1. Rolagem Suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(linkAnchor => {
    linkAnchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o pulo seco padrão do navegador

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Rola a página suavemente até o elemento
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Efeito de Sombra no Cabeçalho ao rolar a página
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Se rolou mais de 50px para baixo, adiciona sombra
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        // Volta ao estado normal no topo
        header.style.boxShadow = 'none';
    }
});