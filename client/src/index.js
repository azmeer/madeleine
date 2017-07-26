/*  eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import App from './containers/app';
import reducers from './reducers';

/* eslint-disable prefer-const */
let store = createStore(reducers, applyMiddleware(thunk, promise));
/* eslint-enable prefer-const */

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
