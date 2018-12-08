import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageMockRoures from './Routes';
import './style.scss';

const PageMock = () => {
  return (
    <BrowserRouter
      basename = {process.env.PUBLIC_URL}
    >
      <PageMockRoures />
    </BrowserRouter>
  );
};

export default PageMock;
