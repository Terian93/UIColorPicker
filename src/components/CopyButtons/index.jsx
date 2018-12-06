import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';

const fontObject = {
  white: {
    hex: '#fff',
    hsl: {
      h: 100,
      s: 50,
      l: 100
    }
  },
  black: {
    hex: '#000',
    hsl: {
      h: 0,
      s: 0,
      l: 0
    }
  }
};

//TODO add faiding title onChange
class CopyButtons extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  copyToClipboard (str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  handleClick (event, type) {
    event.preventDefault();
    const primary = {
      background: this.props.colors.primary[type],
      font: fontObject[this.props.colors.primary.font][type]
    };
    const secondary = {
      background: this.props.colors.secondary[type],
      font: fontObject[this.props.colors.secondary.font][type]
    };
    const mainbg = {
      background: this.props.colors.mainbg[type],
      font: fontObject[this.props.colors.mainbg.font][type]
    };
    const aditionalbg = {
      background: this.props.colors.aditionalbg[type],
      font: fontObject[this.props.colors.aditionalbg.font][type]
    };
    const allColors = {
      primary,
      secondary,
      mainbg,
      aditionalbg
    };

    switch (this.props.activeColor) {
      case 'primary':
        this.copyToClipboard(JSON.stringify(primary));
        alert('Primary color copied to clipboard');
        break;
      case 'secondary':
        this.copyToClipboard(JSON.stringify(secondary));
        alert('Secondary color copied to clipboard');
        break;
      case 'mainbg':
        this.copyToClipboard(JSON.stringify(mainbg));
        alert('Main background color copied to clipboard');
        break;
      case 'aditionalbg':
        this.copyToClipboard(JSON.stringify(aditionalbg));
        alert('Aditional background color copied to clipboard');
        break;
      default:
        this.copyToClipboard(JSON.stringify(allColors));
        alert('All colors copied to clipboard');
    }
  }

  render () {
    return (
      <div className="copy-buttons">
        <h4 className="copy-buttons__header">
          {this.props.activeColor === 'none'
            ? 'copy all colors'
            : `copy ${this.props.activeColor} color`}
        </h4>
        <div className="copy-buttons__buttons-container">
          <span
            className="copy-buttons__buttons-container__hex-btn"
            onClick={event => this.handleClick(event, 'hex')}
          >
            HEX
          </span>
          <span
            className="copy-buttons__buttons-container__hsl-btn"
            onClick={event => this.handleClick(event, 'hsl')}
          >
            HSL
          </span>
        </div>
      </div>
    );
  }
}

CopyButtons.propTypes = {
  activeColor: PropTypes.string.isRequired,
  colors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activeColor: state.activeColor,
  colors: state.colors
});

export default connect(mapStateToProps)(CopyButtons);
