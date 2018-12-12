import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Router = () => (
  <BrowserRouter
    basename = {process.env.PUBLIC_URL}
  >
    <App/>
  </BrowserRouter>
);

export default hot(module)(Router);
