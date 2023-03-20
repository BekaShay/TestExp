import {API} from '../api/API';
import {URLS} from '../url/URLS';

export class MainController {
  static get = async params => {
    return await API.get(URLS.API.MAIN, params);
  };
}

export class ArticlesController {
  static get = async params => {
    return await API.get(URLS.API.ARTICLE, params);
  };
}

export class BookController {
  static get = async params => {
    return await API.get(URLS.API.GET_BOOK, params);
  };
}

export class GenreController {
  static get = async () => {
    return await API.get(URLS.API.GENRE);
  };

  static getById = async params => {
    return await API.get(URLS.API.GET_CATOLOG_BOOKS, params);
  };
}

export class NavigatController {
  static get = async () => {
    return await API.get(URLS.API.NAVIGATION);
  };
  static getByLink = async (id, params) => {
    return await API.get('page/' + id, {params: params});
  };
}
