import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function fetchImg(searchInput) {
  const apiKey = '42869495-3eaffa1d7f59c13a6a9af4ac7';
  const searchWord = searchInput.value;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&orientation=horizontal&safesearch=true`;
  if (searchWord === "") {
    return
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.log(error);
    // });
}

export default fetchImg;

