import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
// import popper from 'pooper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

