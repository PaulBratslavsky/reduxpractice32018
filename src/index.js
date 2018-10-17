import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import store from './Store/index';

console.log('This is from index.js', store);


ReactDOM.render(<App/>, document.getElementById('root'));