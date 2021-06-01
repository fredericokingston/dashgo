import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost3000/api',
});