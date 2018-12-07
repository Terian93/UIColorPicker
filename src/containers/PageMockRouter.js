import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageMock from '../components/PageMock';

const PageMockRouter = () => {
  return (
    <BrowserRouter
      basename = '/UIColorPicker'
    >
      <PageMock />
    </BrowserRouter>
  );
};

export default PageMockRouter;
