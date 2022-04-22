import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions, reportError } from './middlewares';
import './index.css';
// import pokemonSaga from './sagas';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = composeAlt(
    applyMiddleware(thunk, logActions, reportError)
);

const store = createStore(pokemonReducer, composedEnhancers);

// sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
