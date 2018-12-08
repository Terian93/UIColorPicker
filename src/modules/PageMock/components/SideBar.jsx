import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBar = ({ parentClassName, sideBarClosed, itemColor, bgColor }) => {
  const classModifier = sideBarClosed ? ' closed' : '';
  const root = document.documentElement;
  root.style.setProperty('--color', itemColor.font);
  return (
    <nav
      style={{
        backgroundColor: bgColor.hex,
        color: itemColor.font
      }}
      className={parentClassName + '__side-bar' + classModifier}
    >
      <div
        style={{ backgroundColor: itemColor.hex }}
        className={parentClassName + '__side-bar__nav-item active'}
      >
        Template 1
      </div>
      <Link
        to="/second-template"
        style={{ backgroundColor: itemColor.hex }}
        className={parentClassName + '__side-bar__nav-item'}
      >
        Template 2
      </Link>
      <Link
        to="/third-template"
        style={{ backgroundColor: itemColor.hex }}
        className={parentClassName + '__side-bar__nav-item'}
      >
        Template 3
      </Link>
    </nav>
  );
};

SideBar.propTypes = {
  parentClassName: PropTypes.string.isRequired,
  sideBarClosed: PropTypes.bool.isRequired,
  itemColor: PropTypes.object.isRequired,
  bgColor: PropTypes.object.isRequired
};

export default SideBar;
