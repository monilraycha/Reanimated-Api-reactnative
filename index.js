/**
 * @format
 */
import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import ApiData from './src/ApiData';
import ApiDataEx from './src/ApiDataEx';
import FontLearn from './src/FontLearn';

AppRegistry.registerComponent(appName, () => FontLearn);
