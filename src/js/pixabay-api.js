// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
// import { searchInput } from '../main';
// // import startBtn from '../main';

// export function fetchImg() {
//   fetch('https://pixabay.com/api/', {
//     key: '42869495-3eaffa1d7f59c13a6a9af4ac7',
//     q: searchInput,
//     // image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(Error => {
//       console.log(Error);
//     });
// }

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchInput } from '../main';

export function fetchImg() {
    const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';
    const searchWord = searchInput.value
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
