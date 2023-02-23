import axios from 'axios';
import { URLS } from '../url/URLS';
export const API = axios.create({
    baseURL: URLS.DOMEN,
    headers: {
      Accept: 'application/json',
      lang: 'ru',
    },
  });