import React from 'react';
import { hot } from 'react-hot-loader';

import SideMenu from './modules/SideMenu';
import PageMock from './modules/PageMock';

const App = () => (
  <div className="container">
    <SideMenu />
    <PageMock />
  </div>
);

export default hot(module)(App);
