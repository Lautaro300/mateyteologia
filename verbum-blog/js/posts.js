// === VERBUM — Base de datos de entradas ===
// Para agregar una nueva entrada, añade un objeto al array POSTS
// siguiendo el mismo formato. Luego crea el archivo HTML en /posts/

const POSTS = [
  {
    id: "sermon-del-monte",
    titulo: "El Sermón del Monte: Ética del Reino de Dios",
    categoria: "Estudio bíblico",
    tipo: "estudio",
    fecha: "15 Feb 2025",
    referencia: "Mateo 5–7",
    lectura: "18 min",
    resumen: "Un análisis del contexto histórico-cultural de Mateo 5–7 y su relevancia para la ética cristiana contemporánea. El Sermón del Monte representa uno de los discursos más profundos de Jesús sobre la vida en el Reino.",
    archivo: "posts/sermon-del-monte.html"
  },
  {
    id: "gracia-romanos",
    titulo: "La Teología de la Gracia en la Carta a los Romanos",
    categoria: "Estudio bíblico",
    tipo: "estudio",
    fecha: "1 Feb 2025",
    referencia: "Romanos 1–8",
    lectura: "22 min",
    resumen: "Pablo desarrolla en Romanos 1–8 una exposición sistemática de la justificación por la fe, con implicaciones profundas para la soteriología reformada y la vida cristiana.",
    archivo: "posts/gracia-romanos.html"
  },
  {
    id: "apocalipsis-hermeneutica",
    titulo: "Apocalipsis y el Tiempo Presente: Una Lectura Hermenéutica",
    categoria: "Comentario teológico",
    tipo: "comentario",
    fecha: "8 Feb 2025",
    referencia: "Apocalipsis",
    lectura: "15 min",
    resumen: "¿Cómo leer el libro de Apocalipsis sin caer en el literalismo extremo ni en el espiritualismo vacío? Un acercamiento hermenéutico responsable para la iglesia de hoy.",
    archivo: "posts/apocalipsis-hermeneutica.html"
  },
  {
    id: "salmos-lamento",
    titulo: "Los Salmos de Lamento: Teología del Sufrimiento",
    categoria: "Estudio bíblico",
    tipo: "estudio",
    fecha: "18 Ene 2025",
    referencia: "Salmos 22, 42, 88",
    lectura: "14 min",
    resumen: "El lamento como forma legítima de oración. Análisis de los Salmos 22, 42 y 88 en diálogo con la experiencia del dolor humano y la teología bíblica del sufrimiento.",
    archivo: "posts/salmos-lamento.html"
  },
  {
    id: "trinidad-juan-14",
    titulo: "Trinidad e Inhabitación: Una reflexión desde Juan 14",
    categoria: "Comentario teológico",
    tipo: "comentario",
    fecha: "25 Ene 2025",
    referencia: "Juan 14",
    lectura: "12 min",
    resumen: "El discurso de despedida de Jesús revela una pneumatología profunda: la presencia trinitaria en el creyente y sus implicaciones doxológicas para la adoración y la vida espiritual.",
    archivo: "posts/trinidad-juan-14.html"
  },
  {
    id: "proverbios-sabiduria",
    titulo: "Sabiduría y Creación: El Libro de Proverbios",
    categoria: "Estudio bíblico",
    tipo: "estudio",
    fecha: "10 Ene 2025",
    referencia: "Proverbios",
    lectura: "16 min",
    resumen: "La literatura sapiencial hebrea y su cosmovisión: el temor a Dios como fundamento del conocimiento y la vida ordenada según la creación.",
    archivo: "posts/proverbios-sabiduria.html"
  }
];

// Contar por tipo
function contarPorTipo(tipo) {
  return POSTS.filter(p => p.tipo === tipo).length;
}

// Renderizar grid de la portada (últimos 6)
function renderizarPortada() {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;

  const recientes = POSTS.slice(0, 6);
  grid.innerHTML = recientes.map(post => `
    <a href="${post.archivo}" class="article-card">
      <div class="card-tag tag-${post.tipo}">${post.categoria}</div>
      <div class="card-title">${post.titulo}</div>
      <div class="card-excerpt">${post.resumen}</div>
      <div class="card-footer">
        <div class="card-date">${post.fecha}</div>
        <div class="card-arrow">→</div>
      </div>
    </a>
  `).join('');

  // Actualizar contadores de categorías
  const ce = document.getElementById('count-estudios');
  const cc = document.getElementById('count-comentarios');
  if (ce) ce.textContent = `${contarPorTipo('estudio')} estudios publicados`;
  if (cc) cc.textContent = `${contarPorTipo('comentario')} comentarios publicados`;
}

// Renderizar lista de estudios
function renderizarEstudios() {
  const lista = document.getElementById('lista-estudios');
  if (!lista) return;
  const estudios = POSTS.filter(p => p.tipo === 'estudio');
  if (estudios.length === 0) {
    lista.innerHTML = '<div class="empty-state">Aún no hay estudios publicados.</div>';
    return;
  }
  lista.innerHTML = estudios.map(post => `
    <a href="../${post.archivo}" class="post-item">
      <div class="card-tag tag-estudio">${post.categoria} · ${post.referencia}</div>
      <div class="post-item-title">${post.titulo}</div>
      <div class="post-item-excerpt">${post.resumen}</div>
      <div class="post-item-meta">
        <span>${post.fecha}</span>
        <span>·</span>
        <span>${post.lectura} de lectura</span>
      </div>
      <span class="post-read-link">Leer estudio →</span>
    </a>
  `).join('');
}

// Renderizar lista de comentarios
function renderizarComentarios() {
  const lista = document.getElementById('lista-comentarios');
  if (!lista) return;
  const comentarios = POSTS.filter(p => p.tipo === 'comentario');
  if (comentarios.length === 0) {
    lista.innerHTML = '<div class="empty-state">Aún no hay comentarios publicados.</div>';
    return;
  }
  lista.innerHTML = comentarios.map(post => `
    <a href="../${post.archivo}" class="post-item">
      <div class="card-tag tag-comentario">${post.categoria} · ${post.referencia}</div>
      <div class="post-item-title">${post.titulo}</div>
      <div class="post-item-excerpt">${post.resumen}</div>
      <div class="post-item-meta">
        <span>${post.fecha}</span>
        <span>·</span>
        <span>${post.lectura} de lectura</span>
      </div>
      <span class="post-read-link">Leer comentario →</span>
    </a>
  `).join('');
}
