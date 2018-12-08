import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageMock from '../components/PageMock';

const PageMockRouter = () => {
  return (
    <BrowserRouter
      basename = {process.env.PUBLIC_URL}
    >
      <PageMock />
    </BrowserRouter>
  );
};

export default PageMockRouter;
