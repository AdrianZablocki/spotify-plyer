import React from 'react';
import { render } from 'react-dom';

// eslint-disable-next-line import/no-unresolved
import App from 'src/App';

const bootstrap = () => {
  const rootId = 'sp-root';

  const root = document.createElement('div');
  root.id = rootId;

  document.body.appendChild(root);

  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />, document.getElementById(rootId));
};

const startSpotifyPlayer = () => {
  if (/complete|interactive|loaded/.test(document.readyState)) {
    bootstrap();
    return;
  }

  document.addEventListener('DOMContentLoaded', bootstrap, false);
};

startSpotifyPlayer();
