// Selecciona todos los enlaces con la clase "scroll-link"
const links = document.querySelectorAll('.scroll-link');

// Agrega un evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const targetId = link.getAttribute('href'); // Obtiene el valor del atributo "href"
        const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo por su id

        // Realiza el desplazamiento suave hacia el elemento objetivo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});