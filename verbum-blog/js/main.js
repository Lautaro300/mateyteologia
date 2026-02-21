// === VERBUM — Script principal ===

document.addEventListener('DOMContentLoaded', () => {
  // Año en footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Renderizar contenido según la página
  renderizarPortada();
  renderizarEstudios();
  renderizarComentarios();

  // Marcar nav activo
  const links = document.querySelectorAll('nav a, .mobile-nav a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
});

// Menú móvil
function toggleMenu() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}
