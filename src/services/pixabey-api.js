import axios from 'axios';

const API_KEY = '20186871-d4cb7e63badc121c032d79d10';

const fetchImageGallery = (searchQuery = '', page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImageGallery };
