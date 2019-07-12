import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,compose, applyMiddleware } from 'redux'
import appReducers from './Reducers/index'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//create store to save all state in storage

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
