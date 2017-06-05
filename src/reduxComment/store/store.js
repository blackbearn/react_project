/**
 * Created by Administrator on 2017/6/5.
 */
import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux';
import reducers from '../reducers/index';
import axiosMiddleware from 'redux-axios-middleware';
import { createLogger } from 'redux-logger';
import * as actions from '../actions/actions';

const loggerMiddleware = createLogger();

export let store = '';

if (process.env.NODE_ENV === 'dev') {
  store = createStore(reducers, compose(
    applyMiddleware(axiosMiddleware, loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
} else {
  store = createStore(reducers, compose(
    applyMiddleware(axiosMiddleware)
  ));
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/index', () => {
    const nextReducer = require('../reducers/index');
    store.replaceReducer(nextReducer);
  });
}

export const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
