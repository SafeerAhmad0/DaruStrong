/**
 * @format
 */
import 'react-native-gesture-handler';
import MainNavigation from './src/Navigation/MainNavigation';

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import MainStack from './src/Navigation/MainNavigation';
import App from './test';

AppRegistry.registerComponent(appName, () => MainStack);
 