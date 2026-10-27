
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log('Pickle Rick!!!');
    mostrartodo(data.results);
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error(' al leer el archivo JSON:', error);
  });



  
  function mostrartodo (personajes) {
  const container = document.getElementById("Personajes");
    container.innerHTML = ''; 

    personajes.forEach(personajes => {
    container.innerHTML += `
<article class = 'Personaje'>
       <article class = 'Nombre'>
        ${personajes.name}
        </article>
        <article class = 'Imagen'>
        <img src="${personajes.image}" alt="${personajes.name}">
        </article>
        <article class = 'Status'>
        ${personajes.status}
        </article>
        <article class = 'species'>
        ${personajes.species}
        </article>
        <article class = 'Type'>
        ${personajes.type}
        </article>
       <article class = 'Gender'>
        ${personajes.gender}
        </article>
       <article class = 'Origin'>
        ${personajes.origin.name}
        </article>
</article>
  `})
}
cargarTodos();