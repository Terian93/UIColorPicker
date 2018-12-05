import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ parentClassName, color, toogleSideBar = () => {} }) => {
  return (
    <header
      style={{
        backgroundColor: color.hex,
        color: color.font
      }}
      className={parentClassName + '__header'}
    >
      <h4 className={parentClassName + '__title'} onClick={toogleSideBar}>
        App title
      </h4>
    </header>
  );
};

Header.propTypes = {
  parentClassName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  toogleSideBar: PropTypes.func
};

export default Header;
