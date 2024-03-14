const form = document.querySelector('.form');
export const searchInput = document.querySelector('.search-input');
export const startBtn = document.querySelector('.start-btn');

import { fetchImg } from './js/pixabay-api';

form.addEventListener('submit', evt => {
  evt.preventDefault();
  fetchImg();
});
