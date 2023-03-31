/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import InitAPI from './src/initApp/InitAPI';
InitAPI();
AppRegistry.registerComponent(appName, () => App);
