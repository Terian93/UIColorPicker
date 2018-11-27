import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorButton.scss';

const ColorButton = ({ blockName, color, activeColorName, action }) => {
  const modifier = activeColorName === blockName ? ' active' : '';
  const clickFunction = event => {
    event.preventDefault();
    action(blockName);
  };
  return (
    <div
      className={'side-menu__color-button ' + blockName + modifier}
      style={{ background: color }}
      onClick={clickFunction}
    />
  );
};

ColorButton.propTypes = {
  blockName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  activeColorName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ColorButton;
