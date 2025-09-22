// JAVASCRIPT PARA EL MENÚ HAMBURGUESA

// Elementos del DOM
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarOverlay = document.querySelector('.navbar-overlay');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Función para abrir/cerrar menú
function toggleMenu() {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    navbarOverlay.classList.toggle('active');
    
    // Actualizar aria-expanded
    const isExpanded = navbarToggle.classList.contains('active');
    navbarToggle.setAttribute('aria-expanded', isExpanded);
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = isExpanded ? 'hidden' : '';
}

// Función para cerrar menú
function closeMenu() {
    navbarToggle.classList.remove('active');
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// Event listeners
navbarToggle.addEventListener('click', toggleMenu);
navbarOverlay.addEventListener('click', closeMenu);

// Cerrar menú al hacer click en un enlace
navbarLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Cerrar menú al redimensionar ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});