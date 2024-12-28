'use strict';

const charactersUl = document.querySelector('.js_charactersUl');
const favouritesUl = document.querySelector('.js_favouritesUl');
const searchInput = document.querySelector('.js_searchInput');
const searchBtn = document.querySelector('.js_searchBtn');

let favouriteCharacters = [];
let allCharacters = [];

// Renderiza un personaje con la clase 'favourite' si es favorito
const renderOneCharacter = (characterObj) => {
  const imageUrl = characterObj.imageUrl || 'https://placehold.co/400x400/ffffff/555555?text=Disney';

  let isFavourite = false;
  for (const character of favouriteCharacters) {
    if (character._id === characterObj._id) {
      isFavourite = true;
    }
  }

  const characterHtml = `<li class="character js_character ${isFavourite ? 'favourite' : ''}" id="${characterObj._id}">
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

  const allCharactersLi = document.querySelectorAll('.js_character');
  for (const li of allCharactersLi) {
    li.addEventListener('click', handleFavourite);
  }
};

// Maneja los personajes favoritos
const handleFavourite = (ev) => {
  const clickedId = Number(ev.currentTarget.getAttribute('id'));
  const clickedCharacterObj = allCharacters.find((eachCharacter) => eachCharacter._id === clickedId);

  if (!clickedCharacterObj) {
    console.error('No se encontró el personaje con id:', clickedId);
    return;
  }

  const favouriteCharacterIdx = favouriteCharacters.findIndex((eachCharacter) => eachCharacter._id === clickedId);

  if (favouriteCharacterIdx === -1) {
    favouriteCharacters.push(clickedCharacterObj);
  } else {
    favouriteCharacters.splice(favouriteCharacterIdx, 1);
  }

  renderFavourites();
  renderAllCharacters();
  localStorage.setItem('favouriteCharacters', JSON.stringify(favouriteCharacters));
};

// Renderiza la lista de personajes favoritos
const renderFavourites = () => {
  let html = '';
  favouriteCharacters.forEach((character) => {
    html += `
      <li class="favourite js_character ${character._id}" id="${character._id}">
        <img src="${character.imageUrl || 'https://placehold.co/400x400/ffffff/555555?text=Disney'}" alt="${character.name}" class="character__image" />
        <h3 class="character__name">${character.name}</h3>
      </li>
    `;
  });

  favouritesUl.innerHTML = html;
};

// Cargar los favoritos desde localStorage
if (localStorage.getItem('favouriteCharacters') !== null) {
  favouriteCharacters = JSON.parse(localStorage.getItem('favouriteCharacters'));
  renderFavourites();
}

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

// Fetch para buscar personajes por nombre
const fetchSearchCharacters = (query) => {
  const encodedQuery = encodeURIComponent(query.trim().toLowerCase()); // Codificar la búsqueda y convertir a minúsculas

  fetch(`https://api.disneyapi.dev/character?pageSize=50&name=${encodedQuery}`)
    .then((response) => response.json())
    .then((data) => {
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
    .catch((error) => console.error('Error al realizar la búsqueda:', error));
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

// Fetch inicial para cargar personajes
fetchInitialCharacters();

  




