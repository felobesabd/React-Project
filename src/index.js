import React from 'react';
import ReactDOM  from 'react-dom';
import './css/style.css'
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './Reducer/store/store';

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
    , document.getElementById('root'))