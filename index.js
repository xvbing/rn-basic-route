/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/common/globalData';
import './src/api/api';
import './src/common/utils';
import './src/common/storage';

AppRegistry.registerComponent(appName, () => App);
