import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  parentClassName,
  color,
  titleText = 'App Title',
  toogleSideBar = () => {}
}) => {
  return (
    <header
      style={{
        backgroundColor: color.hex,
        color: color.font
      }}
      className={parentClassName + '__header'}
    >
      <h4 className={parentClassName + '__title'} onClick={toogleSideBar}>
        {titleText}
      </h4>
    </header>
  );
};

Header.propTypes = {
  parentClassName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  toogleSideBar: PropTypes.func,
  titleText: PropTypes.string
};

export default Header;
