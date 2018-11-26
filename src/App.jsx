import React from 'react';
import { hot } from 'react-hot-loader';

//import SideMenu from './components/sideMenu';
import PageMock from './components/PageMock';
import SideMenuContainer from './container/SideMenuContainer';

const App = () => (
  <div className="container">
    <SideMenuContainer />
    <PageMock />
  </div>
);

export default hot(module)(App);
