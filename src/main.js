export const searchInput = document.querySelector('.search-input').value;
export const startBtn = document.querySelector('.start-btn');
const form = document.querySelector('.form');

import { searchImg as searchFunc } from './js/pixabay-api';

form.addEventListener('submit', searchFunc())