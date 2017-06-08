/**
 * Created by Administrator on 2017/6/5.
 */
import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux';
import reducers from '../reducers/index';
import axiosMiddleware from 'redux-axios-middleware';
import axiosConfig from '../lib/axiosBase';
import { createLogger } from 'redux-logger';
import * as actionComment from '../actions/actionComment';

const loggerMiddleware = createLogger();

export let store = '';

if (process.env.NODE_ENV === 'dev') {
  store = createStore(reducers, compose(
    applyMiddleware(axiosMiddleware(axiosConfig), loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
} else {
  store = createStore(reducers, compose(
    applyMiddleware(axiosMiddleware(axiosConfig))
  ));
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/index', () => {
    const nextReducer = require('../reducers/index').default;
    store.replaceReducer(nextReducer);
  });
}

export const mapStateToProps = (state) => {
  return {
    commentState: state
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    commentAction: bindActionCreators(actionComment, dispatch)
  };
};
