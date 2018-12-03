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
  }

  handleInputChange (hex) {
    if (/^#?(#{1})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.test(hex)) {
      this.props.handleColorChange(hex);
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
            color={this.props.color}
            onChange={this.props.handleColorChange}
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
  color: PropTypes.string.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened,
  color:
    state.sideMenuReducer.activeColor !== 'none'
      ? state.sideMenuReducer.colors[state.sideMenuReducer.activeColor]
      : '#ffffff'
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar),
  handleColorChange: ({ hex }) => {
    dispatch(changeColor(hex));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
