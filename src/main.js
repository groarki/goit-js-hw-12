import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

hideLoader();

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();

  showLoader();

  if (query === '') {
    return;
  }
  getImagesByQuery(query)
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
      createGallery(data.hits);
      hideLoader();
      console.log(data);
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
