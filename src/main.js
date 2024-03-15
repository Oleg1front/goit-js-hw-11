const form = document.querySelector('.form');
export const searchInput = document.querySelector('.search-input');
export const startBtn = document.querySelector('.start-btn');
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImg from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';

form.addEventListener('submit', evt => {
  evt.preventDefault();
  fetchImg(searchInput)
    .then(({ hits }) => {
      createGalleryMarkup(hits);
    })
    .catch(Error => console.log(Error));

  form.reset();
});

const lightbox = new simpleLightbox('.gallery a', {
  captionDelay: 250,
});
lightbox.elements
