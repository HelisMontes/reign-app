import axios from 'axios';
//client axios configuration
const clientAxios = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1/'
});

export default clientAxios