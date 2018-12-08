import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeActiveColor } from '../../../actions';
import ColorButton from '../components/ColorButton/';

const ColorButtons = ({ colors, activeColorName, changeActiveColor }) => {
  return (
    <div className="side-menu__colors-container">
      <ColorButton
        blockName="primary"
        color={colors['primary']['hex']}
        activeColorName={activeColorName}
        action={changeActiveColor}
      />
      <ColorButton
        blockName="secondary"
        color={colors['secondary']['hex']}
        activeColorName={activeColorName}
        action={changeActiveColor}
      />
      <ColorButton
        blockName="mainbg"
        color={colors['mainbg']['hex']}
        activeColorName={activeColorName}
        action={changeActiveColor}
      />
      <ColorButton
        blockName="aditionalbg"
        color={colors['aditionalbg']['hex']}
        activeColorName={activeColorName}
        action={changeActiveColor}
      />
    </div>
  );
};

ColorButtons.propTypes = {
  colors: PropTypes.object.isRequired,
  activeColorName: PropTypes.string.isRequired,
  changeActiveColor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  colors: state.colors,
  activeColorName: state.activeColor
});

const mapDispatchToProps = dispatch => ({
  changeActiveColor: colorName => {
    dispatch(changeActiveColor(colorName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorButtons);
