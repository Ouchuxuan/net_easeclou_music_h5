import React from 'react';
import './App.css';
import AppContainer from './router/index';
import 'antd-mobile/dist/antd-mobile.css';
import store from './store';
import {Provider } from 'react-redux';

const App:React.FC = () => {
  return (
    <Provider store={store}>
    <AppContainer/>
    </Provider>
  );
}

export default App;
