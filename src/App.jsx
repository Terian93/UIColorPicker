import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Container from './container';

const App = () => (
  <BrowserRouter
    basename = {process.env.PUBLIC_URL}
  >
    <Container/>
  </BrowserRouter>
);

export default hot(module)(App);
