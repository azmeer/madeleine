/*  eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import reducers from './reducers';

let store = createStore(reducers); // eslint-disable-line prefer-const

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
