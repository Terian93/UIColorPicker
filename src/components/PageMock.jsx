import React from 'react';
import PropTypes from 'prop-types';
import '../styles/pageMock.scss';

const PageMock = () => (
  <section className="page-mock">Page Mock Works!</section>
);

PageMock.propTypes = {
  title: PropTypes.string
};

export default PageMock;