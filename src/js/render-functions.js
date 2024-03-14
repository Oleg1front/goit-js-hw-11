function createGalleryMarkup(items) {
  const gallery = document.querySelector('.gallery');
  const markup = items
    .map(item => {
      return `<li class="gallery-list-item">
        <a class="gallery-link" href="${item.largeImageURL}">
            <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-list-item-img"        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Likes</p>
                    <p class ="gallery-list-item-text">${item.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Views</p>
                    <p class ="gallery-list-item-text">${item.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Comments</p>
                    <p class ="gallery-list-item-text">${item.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Downloads </p>
                    <p class ="gallery-list-item-text">${item.downloads}</p>
                </div>
            </div>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export default createGalleryMarkup;
