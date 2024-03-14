// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import searchInput from '../main';
import startBtn from '../main';

const options = {
  key: '42869495-3eaffa1d7f59c13a6a9af4ac7',
  q: [searchInput],
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export function searchImg() {
  fetch('https://pixabay.com/api/', options)
    .then(Response => {
      if (!Response.ok) {
        throw new Error(Response.status);
      }
      return Response.json();
    })
    .then(data => {
      console.log(data);
    })
      .catch(Error => {
        console.log(Error)
    });
}
