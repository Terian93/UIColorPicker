import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import MainSpace from '../../components/MainSpace';
import './style.scss';

export default class FirstTemplate extends Component {
  constructor (props) {
    super(props);

    this.state = {
      sideBarClosed: false
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick () {
    this.setState({ sideBarClosed: !this.state.sideBarClosed });
  }

  render () {
    return (
      <div className="page-mock__container">
        <Header
          color={this.props.colors.primary}
          toogleSideBar={this.handleHeaderClick}
        />
        <main className="page-mock__main">
          <SideBar
            sideBarClosed={this.state.sideBarClosed}
            itemColor={this.props.colors.secondary}
            bgColor={this.props.colors.aditionalbg}
          />
          <MainSpace
            activeLink="first-template"
            bgColor={this.props.colors.mainbg}
            postBgColor={this.props.colors.aditionalbg}
            linkColor={this.props.colors.secondary}
          />
        </main>
        <footer
          style={{ backgroundColor: this.props.colors.primary.hex }}
          className="page-mock__footer"
        />
      </div>
    );
  }
}

FirstTemplate.propTypes = {
  colors: PropTypes.object.isRequired
};
