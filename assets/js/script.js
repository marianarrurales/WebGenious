// Función para agregar o quitar la clase "white" del navbar dependiendo de la posición del scroll
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const mq = window.matchMedia('(max-width: 768px)');

  if (mq.matches) {
    navbar.classList.add('white');
  } else {
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
          navbar.classList.add('white');
        } else {
          navbar.classList.remove('white');
        }
      });
    }
  }
}

// Función para manejar el evento "click" en los enlaces de navegación
function handleNavLinksClick() {
  // Seleccionar todos los enlaces de navegación
  const links = document.querySelectorAll('.nav-link');

  // Recorrer los enlaces de navegación y agregar un controlador de eventos de clic
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir la acción por defecto del enlace

      // Eliminar la clase "active w--current" y el atributo "aria-current" de todos los enlaces de navegación
      links.forEach(link => {
        link.classList.remove('active', 'w--current');
        link.removeAttribute('aria-current');
      });

      // Agregar la clase "active w--current" y el atributo "aria-current" al enlace que fue clicado
      link.classList.add('active', 'w--current');
      link.setAttribute('aria-current', 'page');

      // Obtener el atributo href del enlace y el desplazamiento hacia el elemento correspondiente
      const target = link.getAttribute('href');
      const scrollToTarget = document.querySelector(target);

      // Desplazarse hacia el elemento correspondiente
      scrollToTarget.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Función para manejar el evento "click" en los botones
function handleButtonLinksClick() {
  const botones = {
    boton1: 'ejercicio1.html',
    boton2: 'ejercicio2.html',
    boton3: 'ejercicio3.html',
  };

  document.addEventListener('click', function(event) {
    if (event.target.id in botones) {
      window.location.href = botones[event.target.id];
    }
  });
}

// Ejecutar las funciones cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
  handleNavbarScroll();
  handleNavLinksClick();
  handleButtonLinksClick();
});