import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ color, toogleSideBar = () => {} }) => {
  return (
    <header
      style={{
        backgroundColor: color.hex,
        color: color.font
      }}
      className="page-mock__header"
    >
      <h4 className="page-mock__title" onClick={toogleSideBar}>
        App title
      </h4>
    </header>
  );
};

Header.propTypes = {
  color: PropTypes.object.isRequired,
  toogleSideBar: PropTypes.func
};

export default Header;
