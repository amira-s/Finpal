/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router';
import createReducer from './reducers';

function configureStore(initialState = {}, history) {
  const middlewares = [
    thunk,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // Enable Redux devtools for development
  // https://github.com/gaearon/redux-devtools#chrome-extension
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    connectRouter(history)(createReducer()),
    initialState,
    compose(...enhancers)
  );

  // Extensions
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(connectRouter(history)(nextReducers));
      });
    });
  }

  return store;
}

export default (initialState = {}, history) => {
  const store = configureStore(initialState, history);

  return store;
};
