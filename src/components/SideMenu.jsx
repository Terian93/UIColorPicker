import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideBar, changeActiveColor } from '../actions';
import ColorButton from './ColorButton';
import '../styles/SideMenu.scss';

class SideMenu extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const containerClassName = this.props.sideBarOpened
      ? 'side-menu'
      : 'side-menu side-menu--hidden';
    return (
      <section className={containerClassName}>
        <div className="side-menu__container">
          <h2 className="side-menu__title">UI Color Picker</h2>
          <div>
            <ColorButton
              blockName="primary"
              color={this.props.colors['primary']}
              activeColorName={this.props.activeColor}
              action={this.props.changeActiveColor}
            />
          </div>
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
  colors: PropTypes.object.isRequired,
  activeColor: PropTypes.string.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  changeActiveColor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened,
  colors: state.sideMenuReducer.colors,
  activeColor: state.sideMenuReducer.activeColor
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar),
  changeActiveColor: colorName => dispatch(changeActiveColor(colorName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
