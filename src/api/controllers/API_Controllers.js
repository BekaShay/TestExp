import {API} from '../api/API';
import {URLS} from '../url/URLS';

export class MainController {
  static get = async params => {
    return await API.get(URLS.API.MAIN, params);
  };
}
