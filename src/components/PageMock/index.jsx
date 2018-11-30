import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

class PageMock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTemplate: 'first-template',
      sidebarClass: ''
    };

    this.changeTemplate = this.changeTemplate.bind(this);
    this.toogleSideBar = this.toogleSideBar.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.colors !== nextProps.colors) {
      return true;
    }
    if (this.state.activeTemplate !== nextState.activeTemplate) {
      return true;
    }
    if (
      this.state.sidebarClass !== nextState.sidebarClass &&
      this.state.activeTemplate === 'first-template'
    ) {
      return true;
    }
    return false;
  }

  changeTemplate (event, name) {
    event.preventDefault();
    if (name !== this.state.activeTemplate) {
      this.setState({
        activeTemplate: name
      });
    }
  }

  toogleSideBar (event) {
    event.preventDefault();
    const newClass = this.state.sidebarClass === ' close' ? '' : ' close';
    this.setState({
      sidebarClass: newClass
    });
  }

  render () {
    return (
      <section className={'page-mock' + ' ' + this.state.activeTemplate}>
        <header
          style={{
            backgroundColor: this.props.colors.primary,
            color: this.props.colors.primaryFont
          }}
          className="page-mock__header"
          onClick={this.toogleSideBar}
        >
          <h4 className="page-mock__title">App title</h4>
          <span className="page-mock__menu-controls-hint">
            swipe right to open menu
          </span>
        </header>
        <main className="page-mock__main">
          <nav
            style={{
              backgroundColor: this.props.colors.aditionalbg,
              color: this.props.colors.secondaryFont
            }}
            className={'side-bar' + this.state.sidebarClass}
          >
            <div
              style={{ backgroundColor: this.props.colors.secondary }}
              className="side-bar__nav-item"
              onClick={() => this.changeTemplate(event, 'first-template')}
            >
              Template 1
            </div>
            <div
              style={{ backgroundColor: this.props.colors.secondary }}
              className="side-bar__nav-item"
              onClick={() => this.changeTemplate(event, 'second-template')}
            >
              Template 2
            </div>
            <div
              style={{ backgroundColor: this.props.colors.secondary }}
              className="side-bar__nav-item"
              onClick={() => this.changeTemplate(event, 'third-template')}
            >
              Template 3
            </div>
          </nav>
          <div
            style={{
              backgroundColor: this.props.colors.mainbg,
              color: this.props.colors.secondaryFont
            }}
            className="main-space"
          >
            <div
              style={{ backgroundColor: this.props.colors.aditionalbg }}
              className="main-space__post-item"
              onClick={() => this.changeTemplate(event, 'first-template')}
            >
              <div
                style={{ backgroundColor: this.props.colors.secondary }}
                className="main-space__post-item-title"
              >
                Template 1
              </div>
            </div>
            <div
              style={{ backgroundColor: this.props.colors.aditionalbg }}
              className="main-space__post-item"
              onClick={() => this.changeTemplate(event, 'second-template')}
            >
              <div
                style={{ backgroundColor: this.props.colors.secondary }}
                className="main-space__post-item-title"
              >
                Template 2
              </div>
            </div>
            <div
              style={{ backgroundColor: this.props.colors.aditionalbg }}
              className="main-space__post-item"
              onClick={() => this.changeTemplate(event, 'third-template')}
            >
              <div
                style={{ backgroundColor: this.props.colors.secondary }}
                className="main-space__post-item-title"
              >
                Template 3
              </div>
            </div>
          </div>
        </main>
        <footer
          style={{ backgroundColor: this.props.colors.primary }}
          className="page-mock__footer"
        />
      </section>
    );
  }
}
PageMock.propTypes = {
  colors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  colors: state.sideMenuReducer.colors
});

export default connect(mapStateToProps)(PageMock);
