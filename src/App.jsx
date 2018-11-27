import React from 'react';
import { hot } from 'react-hot-loader';

import SideMenu from './components/sideMenu';
import PageMock from './components/PageMock';

const App = () => (
  <div className="container">
    <SideMenu />
    <PageMock />
  </div>
);

export default hot(module)(App);
