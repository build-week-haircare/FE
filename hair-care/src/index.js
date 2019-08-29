import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/Reducers'
import thunk from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)} >
        <App />
    </Provider>,
    document.getElementById('root'));
