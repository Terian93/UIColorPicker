import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideBar } from '../../actions';
import ColorButtons from '../../containers/ColorButtons';
import './style.scss';

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
          <div className="side-menu__menu-controls-hint">
            swipe left to show mock
          </div>
          <ColorButtons />
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
  toggleSideBar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
