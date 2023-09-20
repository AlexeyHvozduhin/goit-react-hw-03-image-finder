import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=38417581-6d699f2852f40bcdc4fffe66a&image_type=photo&orientation=horizontal';
//   &q=cat&page=1

export const searchImages = async (query, page) => {
  const resp = await axios.get(`&per_page=12&q=${query}&page=${page}`);

  return resp.data.hits;
};
