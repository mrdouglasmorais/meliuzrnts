import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meliuz-server-rn.herokuapp.com/',
});

export default api;
