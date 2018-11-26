import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/sideMenu.scss';

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
export default SideMenu;
