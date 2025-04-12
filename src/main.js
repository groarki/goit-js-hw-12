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
  hideEndText,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMore = document.querySelector('.loadMore');

hideLoader();
hideLoadMoreButton();
let page = 1;
let userInput;

form.addEventListener('submit', event => {
  event.preventDefault();
  userInput = input.value.trim();
  page = 1;

  showLoader();
  hideEndText();

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
      }

      clearGallery();
      createGallery(data.hits);
      hideLoader();
      hideEndText();

      if (data.totalHits > 15) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
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
    createGallery(data.hits);
    hideEndText();

    if (page >= Math.ceil(data.totalHits / 15)) {
      hideLoadMoreButton();
      showEndText();
      loadMore.disabled = false;
      return;
    }

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
