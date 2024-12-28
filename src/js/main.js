'use strict';

const charactersUl = document.querySelector('.js_charactersUl');
const searchInput = document.querySelector('.js_searchInput');
const searchBtn = document.querySelector('.js_searchBtn');

let allCharacters = [];

// Renderiza un personaje
const renderOneCharacter = (characterObj) => {
  const imageUrl = characterObj.imageUrl || 'https://placehold.co/400x400/ffffff/555555?text=Disney';
  const characterHtml = `<li class="character js_character" id="${characterObj._id}">
    <img src="${imageUrl}" alt="${characterObj.name}" class="character__image" />
    <h3 class="character__name">${characterObj.name}</h3>
  </li>`;
  return characterHtml;
};

// Renderiza todos los personajes
const renderAllCharacters = () => {
  let html = '';
  allCharacters.forEach((character) => {
    html += renderOneCharacter(character);
  });
  charactersUl.innerHTML = html;
};

// Fetch para obtener los datos iniciales
const fetchInitialCharacters = () => {
  fetch('https://api.disneyapi.dev/character?pageSize=50')
    .then((response) => response.json())
    .then((data) => {
      allCharacters = data.data;
      renderAllCharacters();
    })
    .catch((error) => console.error('Error al obtener los datos:', error));
};

// Fetch inicial para cargar personajes
fetchInitialCharacters();

// Fetch para buscar personajes por nombre
const fetchSearchCharacters = (query) => {
    const encodedQuery = encodeURIComponent(query.trim().toLowerCase()); // Codificar la búsqueda y convertir a minúsculas
  
    fetch(`https://api.disneyapi.dev/character?pageSize=50&name=${encodedQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Estructura completa de la respuesta de la API:', data);  
  
        if (data && data.data) {
          const characters = Array.isArray(data.data) ? data.data : [data.data]; 
  
          if (characters.length > 0) {
            allCharacters = characters;
            renderAllCharacters();
          } else {
            console.log('No se encontraron personajes');
            allCharacters = [];
            renderAllCharacters();
          }
        } else {
          console.log('La respuesta no contiene datos esperados');
          allCharacters = [];
          renderAllCharacters();
        }
      })
  };

  // Maneja el evento de búsqueda
const handleSearch = (ev) => {
    ev.preventDefault();
    const query = searchInput.value.trim();
  
    if (query !== '') {
      fetchSearchCharacters(query);
    } else {
      console.warn('El campo de búsqueda está vacío.');
    }
  };
  
  // Event listener para el botón de buscar
  searchBtn.addEventListener('click', handleSearch);
  




