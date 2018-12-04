import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import MainSpace from '../../components/MainSpace';
import './style.scss';

export default class SecondTemplate extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="page-mock__container">
        <Header color={this.props.colors.primary} />
        <main className="page-mock__main">
          <MainSpace
            linksHiden={false}
            activeLink="second-template"
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

SecondTemplate.propTypes = {
  colors: PropTypes.object.isRequired
};
