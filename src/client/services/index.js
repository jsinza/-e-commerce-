import axios from 'axios';

const BASE_URL = '/api/items';

export function searchItems(query) {
  return axios.get(BASE_URL, { params: { q: query } });
}
export function getItem(id) {
  return axios.get(`${BASE_URL}/${id}`);
}
