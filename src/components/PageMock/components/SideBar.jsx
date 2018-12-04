import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBar = ({ sideBarClosed, itemColor, bgColor }) => {
  const classModifier = sideBarClosed ? ' closed' : '';
  return (
    <nav
      style={{
        backgroundColor: bgColor.hex,
        color: itemColor.font
      }}
      className={'page-mock__side-bar' + classModifier}
    >
      <div
        style={{ backgroundColor: itemColor.hex }}
        className="page-mock__side-bar__nav-item active"
      >
        Template 1
      </div>
      <Link
        to="/second-template"
        style={{ backgroundColor: itemColor.hex }}
        className="page-mock__side-bar__nav-item"
      >
        Template 2
      </Link>
      <Link
        to="/third-template"
        style={{ backgroundColor: itemColor.hex }}
        className="page-mock__side-bar__nav-item"
      >
        Template 3
      </Link>
    </nav>
  );
};

SideBar.propTypes = {
  sideBarClosed: PropTypes.bool.isRequired,
  itemColor: PropTypes.object.isRequired,
  bgColor: PropTypes.object.isRequired
};

export default SideBar;
