import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const reduxDevTool = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, reduxDevTool);
export default store;
