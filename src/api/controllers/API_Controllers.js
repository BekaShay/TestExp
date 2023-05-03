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

export class AuthController {
  static getUser = async params => {
    return await API.post(URLS.API.AUTH.LOGIN, params);
  };

  static createUser = async params => {
    return await API.post(URLS.API.AUTH.REGISTER, params);
  };

  static forgotPassword = async params => {
    return await API.post(URLS.API.AUTH.FORGOT_PASSWORD, params);
  };
}

export class ProfileController {
  static get = async () => {
    return await API.get(URLS.API.PROFILE);
  };

  static update = async params => {
    return await API.post(URLS.API.UPDATE_PROFILE, params, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };
}

export class BasketController {
  static getAll = async () => {
    return await API.get(URLS.API.BASKET);
  };

  static update = async params => {
    return await API.post(URLS.API.ADD_BASKET, params);
  };
}

export class MyBooksController {
  static get = async () => {
    return await API.get(URLS.API.MY_BOOKS);
  };

  static getAudioChapter = async params => {
    return await API.get(URLS.API.BOOK_CHAPTER, {params});
  };

  static getNewOverride = async () => {
    return await API.get(URLS.API.USER_ALL_ORDERS);
  };
}

export class AuthorController {
  static getById = async params => {
    return await API.get(URLS.API.AUTHOR, params);
  };
}

export class PublisherController {
  static getById = async params => {
    return await API.get(URLS.API.PUBLISHER, params);
  };
}