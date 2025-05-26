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