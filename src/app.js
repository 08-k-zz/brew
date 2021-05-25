import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import App from './containers/App';

const initialState = {};

const fontFaceObserver = new FontFaceObserver('Open Sans', initialState);

fontFaceObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE,
);
