import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import WebFont from 'webfontloader';
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './../node_modules/@fortawesome/fontawesome-free/js/all.min.js';

WebFont.load({
  google: {
    families: ['Oswald:200,300,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
