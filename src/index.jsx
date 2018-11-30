import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//import App from './App.jsx';
import SwipeContainer from './containers/SwipeContainer';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <SwipeContainer />
  </Provider>,
  document.getElementById('app')
);
//<SwipeContainer />
//<App/>
