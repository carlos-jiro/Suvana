const testimoniosContainer = document.querySelector('.testimonios-container');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');

nextBtn.addEventListener('click', () => {
    testimoniosContainer.scrollBy({
        left: 300, // Ajusta este valor según el ancho de tus tarjetas
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    testimoniosContainer.scrollBy({
        left: -300, // Ajusta este valor según el ancho de tus tarjetas
        behavior: 'smooth'
    });
});

// Inicialización básica
const swiper = new Swiper('.swiper', {
    // Configuraciones opcionales
    loop: true, // Hace que el carrusel sea infinito
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite hacer clic en los puntos de paginación
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Remueve aria-current de todos los enlaces
            links.forEach(l => l.removeAttribute("aria-current"));
            // Agrega aria-current solo al enlace actual
            this.setAttribute("aria-current", "page");
        });
    });
});
