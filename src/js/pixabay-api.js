import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const par = {
    params: {
      key: '49664766-1adf2829ec799385f1aed5797',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get('/', par).then(resp => {
    return resp.data;
  });
}
