const form = document.querySelector('.form');
export const searchInput = document.querySelector('.search-input');
export const startBtn = document.querySelector('.start-btn');
const galWrap = document.querySelector('.gallery');
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchImg from './js/pixabay-api';
import createGalleryMarkup from './js/render-functions';

form.addEventListener('submit', evt => {
  galWrap.innerHTML = '';
  evt.preventDefault();
  fetchImg(searchInput)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      }
      createGalleryMarkup(hits);
    })
    .catch(Error => console.log(Error));

  form.reset();
});

const lightbox = new simpleLightbox('.gallery-list-item a', {});

lightbox.refresh();
