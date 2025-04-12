import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const list = document.querySelector('.gallery');
const loadMore = document.querySelector('.loadMore');
const endOfHits = document.querySelector('.endText');

export function createGallery(images) {
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
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
export function showLoadMoreButton() {
  loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hidden');
}

export function showEndText() {
  endOfHits.classList.remove('text-hidden');
}
export function hideEndText() {
  endOfHits.classList.add('text-hidden');
}
