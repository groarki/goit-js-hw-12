import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMore = document.querySelector('.loadMore');

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
        return;
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
    loadMore.disabled = false;
    showLoadMoreButton();
  } catch (error) {
    console.log(error);
  }
}
