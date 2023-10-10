import {AppRegistry} from 'react-native';
import {Provider} from 'mobx-react'; // MobX Provider import
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import headerStore from './src/stores/HeaderStore';
// MobX Store를 Provider에 등록하고 App 컴포넌트를 감싸기
const RootComponent = () => <App />;

AppRegistry.registerComponent(appName, () => RootComponent);
