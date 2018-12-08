import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const reduxDevTool = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(rootReducer, reduxDevTool);
export default store;
