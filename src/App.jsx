import React from 'react';
import { hot } from 'react-hot-loader';

import SideMenu from './components/SideMenu/';
import PageMockRouter from './containers/PageMockRouter';

const App = () => (
  <div className="container">
    <SideMenu />
    <PageMockRouter />
  </div>
);

export default hot(module)(App);
