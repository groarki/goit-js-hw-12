import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  clearGallery();
  const card = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" class="photo" />
              </a>
              <div class="photoDetails">
                <div class="detailCont">
                  <p>Likes</p>
                  <p>${likes}</p>
                </div>
                <div class="detailCont">
                  <p>Views</p>
                  <p>${views}</p>
                </div>
                <div class="detailCont">
                  <p>Comments</p>
                  <p>${comments}</p>
                </div>
                <div class="detailCont">
                  <p>Downloads</p>
                  <p>${downloads}</p>
                </div>
              </div>
            </div>
          </li>`;
      }
    )
    .join('');
  list.insertAdjacentHTML('beforeend', card);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

  lightbox.refresh();
}

export function clearGallery() {
  list.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('loader');
}
export function hideLoader() {
  loader.classList.remove('loader');
}
