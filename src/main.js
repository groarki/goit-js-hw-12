import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndText,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMore = document.querySelector('.loadMore');

// const totalPages = Math.ceil(data.totalHits / data.hits.length);

let page = 1;
let userInput;

hideLoader();
hideLoadMoreButton();

form.addEventListener('submit', event => {
  event.preventDefault();
  userInput = input.value.trim();
  page = 1;

  showLoader();

  if (userInput === '') {
    return;
  }
  getImagesByQuery(userInput, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        form.reset();
        clearGallery();
        hideLoader();
        hideLoadMoreButton();
        return;
      } else if (Math.ceil(data.totalHits / 15) === 1) {
        hideLoadMoreButton();
      }
      clearGallery();
      createGallery(data.hits);
      hideLoader();
      showLoadMoreButton();
    })
    .catch(error => {
      clearGallery();
      hideLoader();
      iziToast.error({
        message: 'Sorry, something went wrong!',
        position: 'topRight',
      });
      console.log(error);
      hideLoadMoreButton();
    });
});

loadMore.addEventListener('click', loadMoreFunction);

async function loadMoreFunction() {
  loadMore.disabled = true;
  hideLoadMoreButton();
  page++;

  userInput = input.value.trim();
  try {
    const data = await getImagesByQuery(userInput, page);
    console.log(data);
    if (page >= Math.ceil(data.totalHits / 15)) {
      createGallery(data.hits);
      hideLoadMoreButton();
      showEndText();
      return;
    }
    createGallery(data.hits);
    setTimeout(() => {
      const elem = document.querySelector('.galleryItem');
      const elemHeight = elem.getBoundingClientRect().height * 2;

      window.scrollBy({
        top: elemHeight,
        left: 0,
        behavior: 'smooth',
      });
      loadMore.disabled = false;
      showLoadMoreButton();
    }, 100);
  } catch (error) {
    console.log(error);
  }
}
