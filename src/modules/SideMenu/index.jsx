import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideBar, changeColor } from '../../actions';

import ColorButtons from './containers/ColorButtons';
import ColorPicker from './components/ColorPicker';
import ColorInput from './components/ColorInput';
import CopyButtons from './components/CopyButtons';
import './style.scss';

function preventDefault (e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function disableScroll () {
  window.ontouchmove  = preventDefault;
}

class SideMenu extends Component {
  constructor (props) {
    super(props);
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
  }

  handleColorPickerChange (color) {
    disableScroll();
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
    //enableScroll();
  }

  render () {
    const containerClassName = this.props.sideBarOpened
      ? 'side-menu'
      : 'side-menu side-menu--hidden';
    return (
      <section className={containerClassName}>
        <div className="side-menu__container">
          <h2 className="side-menu__title">
            <span className="gradient-effect">UI Color Picker</span>
          </h2>
          <ColorButtons />
          <ColorPicker
            color={this.props.color.hex}
            onChange={this.handleColorPickerChange}
          />
          <ColorInput
            color={this.props.color}
            handleColorChange={this.props.handleColorChange}
          />
          <CopyButtons />
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
  sideBarOpened: state.sideBarOpened,
  color:
    state.activeColor !== 'none'
      ? state.colors[state.activeColor]
      : { hex: '#ffffff', hsl: { h: 0, s: 0, l: 100 } },
  activeColor: state.activeColor
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
