import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import "nprogress/nprogress.css"
import "./Common/css/index.css"
import "bootstrap/dist/js/bootstrap"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
