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

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.js-input');
  
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keyup', function() {
        if (this.value) {
          this.classList.add('not-empty');
        } else {
          this.classList.remove('not-empty');
        }
      });
    }
  });