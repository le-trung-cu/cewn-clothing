import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import {createStore, applyMiddleware}  from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './redux/root-reducer';
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

