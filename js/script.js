// Añade esto a tu script.js o dentro de <script> en el HTML
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
    
    // Evitar el parpadeo inicial del menú
    navbarCollapse.style.transition = 'none';
    setTimeout(() => {
        navbarCollapse.style.transition = '';
    }, 100);
});

// Ajustar altura del hero en móviles
function adjustHeroHeight() {
    if (window.innerWidth < 768) {
        document.querySelector('.hero-section').style.minHeight = '90vh';
    } else {
        document.querySelector('.hero-section').style.minHeight = '700px';
    }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);