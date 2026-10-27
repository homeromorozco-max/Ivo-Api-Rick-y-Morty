let pagina = 1;
let totalPaginas = 42;

const contenedor = document.getElementById('Personajes');
const btnSiguiente = document.getElementById('pasarpagina+');
const btnAnterior = document.getElementById('pasarpagina-');

function cargarTodos() {
  fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.json();
    })
    .then(data => {
      totalPaginas = data.info.pages;
      mostrartodo(data.results);
    })
    .catch(error => {
      console.error('Error al pedir los personajes:', error);
    });
}

function mostrartodo(personajes) {
  contenedor.innerHTML = personajes.map(p => `
    <article class="Personaje">
      <article class="Nombre">${p.name}</article>
      <article class="Imagen"><img src="${p.image}" alt="${p.name}"></article>
      <article class="Status">${p.status}</article>
      <article class="species">${p.species}</article>
      <article class="Type">${p.type}</article>
      <article class="Gender">${p.gender}</article>
      <article class="Origin">${p.origin.name}</article>
    </article>
  `).join('');
}

btnSiguiente.addEventListener('click', () => {
  if (pagina < totalPaginas) {
    pagina++;
    cargarTodos();
  }
});

btnAnterior.addEventListener('click', () => {
  if (pagina > 1) {
    pagina--;
    cargarTodos();
  }
});

cargarTodos();