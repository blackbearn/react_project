/**
 * Created by Admin on 2017/6/5.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './react-redux/app';
import Provider from './react-redux/provider';
import store from './react-redux/store';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
