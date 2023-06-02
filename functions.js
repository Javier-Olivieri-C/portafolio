const links = document.querySelectorAll('.scroll-link');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function redireccionar(url) {
    window.open(url, "_blank");
}