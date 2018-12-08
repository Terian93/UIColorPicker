import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import MainSpace from '../../components/MainSpace';
import './style.scss';

const templateClass = 'third-template';

export default class ThirdTemplate extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={templateClass}>
        <Header
          parentClassName={templateClass}
          color={this.props.colors.primary}
        />
        <main className={templateClass + '__main'}>
          <MainSpace
            parentClassName={templateClass}
            linksHiden={false}
            activeLink="third-template"
            bgColor={this.props.colors.mainbg}
            postBgColor={this.props.colors.aditionalbg}
            linkColor={this.props.colors.secondary}
          />
        </main>
        <footer
          style={{ backgroundColor: this.props.colors.primary.hex }}
          className={templateClass + '__footer'}
        />
      </div>
    );
  }
}

ThirdTemplate.propTypes = {
  colors: PropTypes.object.isRequired
};
