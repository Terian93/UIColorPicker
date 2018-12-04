import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PageMock from '../components/PageMock';

const PageMockRouter = () => {
  return (
    <MemoryRouter
      initialIndex={0}
      initialEntries={[
        '/first-template',
        '/second-template',
        '/third-template'
      ]}
    >
      <PageMock />
    </MemoryRouter>
  );
};

export default PageMockRouter;
