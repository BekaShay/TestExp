import axios from 'axios';
import {URLS} from '../url/URLS';
export const API = axios.create({
  baseURL: URLS.DOMEN,
  headers: {
    Accept: 'application/json',
    lang: 'ru',
  },
});

API.interceptors.request.use(request => {
  if (request.method == 'post') {
    if (request.url != URLS.API.UPDATE_PROFILE) {
      request.data = {
        ...request.data,
        lang: API.defaults.headers?.lang,
      };
    }
  } else {
    request.params = {
      ...request.params,
      lang: API.defaults.headers.lang,
    };
  }

  return request;
});
