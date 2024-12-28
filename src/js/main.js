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

