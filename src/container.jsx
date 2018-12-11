import React, { Component } from 'react';
import SideMenu from './modules/SideMenu';
import PageMock from './modules/PageMock';

export default class container extends Component {
  render () {
    return (
      <div className="container">
        <SideMenu />
        <PageMock />
      </div>
    );
  }
}
