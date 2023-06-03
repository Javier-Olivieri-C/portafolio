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

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contacto-formulario');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
  
      // Enviar datos a través de una solicitud POST
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'enviar_email.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Manejar la respuesta del servidor
          console.log(xhr.responseText);
          // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación
        }
      };
      xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
    });
  });