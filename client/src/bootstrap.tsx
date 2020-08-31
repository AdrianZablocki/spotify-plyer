import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from 'src/App';
import playListsReducer from 'src/store/reducers/playLists';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  playLists: playListsReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const bootstrap = () => {
  const rootId = 'sp-root';

  const root = document.createElement('div');
  root.id = rootId;

  document.body.appendChild(root);

  // eslint-disable-next-line react/jsx-filename-extension
  render(app, document.getElementById(rootId));
};

const startSpotifyPlayer = () => {
  if (/complete|interactive|loaded/.test(document.readyState)) {
    bootstrap();
    return;
  }

  document.addEventListener('DOMContentLoaded', bootstrap, false);
};

startSpotifyPlayer();
