import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const history = createHistory();
injectTapEventPlugin();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
);

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
