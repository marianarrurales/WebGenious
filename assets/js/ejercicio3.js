/* 
Dada la información sobre un usuario del servicio de agua:
- Nombre
- Estrato(1,2,3,4,5)
- consumo del mes (cm3)
Se pide calcular el valor a pagar por servicio de agua, conociendo que el servicio es
la suma de la tarifa básica más valor del consumo.
La tarifa básica depende del estrato, así:
Estrato   Tarifa Básica
   1       $10000
   2       $15000
   3       $30000
   4       $60000
   5       $80000
   El valor del consumo es la multiplicación entre el consumo del mes por $100 (valor de 1 cm3)
*/
document.querySelector("#cifrar").addEventListener("submit", (e)=>{
  e.preventDefault();
  let nombre = document.getElementById("name").value;
  let estrato = document.getElementById("estrato").value;
  let consumo = parseInt(document.getElementById("consumo").value);

  if (nombre === "") {
    alert("Por favor ingrese su nombre");
    return;
  }

  if (consumo < 0) {
    alert("Por favor ingrese un valor de consumo válido");
    return;
  }

  let tarifaBasica = 0;
  switch (estrato) {
    case "1":tarifaBasica = 10000;break;
    case "2":tarifaBasica = 15000;break;
    case "3":tarifaBasica = 30000;break;
    case "4":tarifaBasica = 60000;break;
    case "5":tarifaBasica = 80000;break;
    default:alert("Por favor seleccione un estrato válido");
      return;
  }

  let valorPagar = tarifaBasica + (consumo * 100);

  document.getElementById("titulo").innerHTML = "Valor a pagar por servicio de agua:";
  document.getElementById("valorPagar").innerHTML = "$" + valorPagar.toLocaleString();

  return false;
})
function liquidarServicio() {

}
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
