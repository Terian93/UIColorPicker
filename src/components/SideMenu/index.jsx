import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideBar, changeColor } from '../../actions';
import ColorButtons from '../../containers/ColorButtons';
import './style.scss';
import ColorPicker from '../ColorPicker';
import ColorInput from '../ColorInput';

class SideMenu extends Component {
  constructor (props) {
    super(props);
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
  }

  handleColorPickerChange (color) {
    if (this.props.activeColor !== 'none') {
      const result = {
        hex: color.hex,
        hsl: {
          h: Math.round(color.hsl.h),
          s: Math.round(color.hsl.s * 100),
          l: Math.round(color.hsl.l * 100)
        }
      };
      this.props.handleColorChange(result);
    }
  }

  render () {
    const containerClassName = this.props.sideBarOpened
      ? 'side-menu'
      : 'side-menu side-menu--hidden';
    return (
      <section className={containerClassName}>
        <div className="side-menu__container">
          <h2 className="side-menu__title">UI Color Picker</h2>
          <ColorButtons />
          <ColorPicker
            color={this.props.color.hex}
            onChange={this.handleColorPickerChange}
          />
          <ColorInput
            color={this.props.color}
            handleColorChange={this.props.handleColorChange}
          />
        </div>
        <div
          className="side-menu__hide-btn"
          onClick={event => {
            event.preventDefault();
            this.props.toggleSideBar();
          }}
        />
      </section>
    );
  }
}

SideMenu.propTypes = {
  sideBarOpened: PropTypes.bool.isRequired,
  color: PropTypes.object.isRequired,
  activeColor: PropTypes.string.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened,
  color:
    state.sideMenuReducer.activeColor !== 'none'
      ? state.sideMenuReducer.colors[state.sideMenuReducer.activeColor]
      : { hex: '#ffffff', hsl: { h: 0, s: 0, l: 100 } },
  activeColor: state.sideMenuReducer.activeColor
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar),
  handleColorChange: color => {
    dispatch(changeColor(color));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
