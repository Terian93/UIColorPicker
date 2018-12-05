import React from 'react';
import { HashRouter } from 'react-router-dom';
import PageMock from '../components/PageMock';

const PageMockRouter = () => {
  return (
    <HashRouter>
      <PageMock />
    </HashRouter>
  );
};

export default PageMockRouter;
