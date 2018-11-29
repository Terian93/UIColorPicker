import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
//import getButtonStyle from './getButtonStyle';

const ColorButton = ({ blockName, color, activeColorName, action }) => {
  const modifier = activeColorName === blockName ? ' active' : '';
  const clickFunction = event => {
    event.preventDefault();
    action(blockName);
  };
  //const colorStyle = getButtonStyle(blockName, activeColorName, color);
  const colorStyle = {
    background: color
  };
  return (
    <div
      className={'side-menu__color-button ' + blockName + modifier}
      style={colorStyle}
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
