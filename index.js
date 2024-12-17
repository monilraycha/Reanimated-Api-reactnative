/**
 * @format
 */
import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ApiData from './ApiData';
import ApiDataEx from './ApiDataEx';

AppRegistry.registerComponent(appName, () => ApiDataEx);
