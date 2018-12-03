import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

const hexToHSL = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);
  return { h, s, l };
};

//TODO add HSL onChange function
class ColorInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      color: this.props.color,
      hslColor: hexToHSL(this.props.color),
      stateColor: this.props.color
    };
    this.handleHexChange = this.handleHexChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.color !== this.state.stateColor) {
      this.setState({
        color: nextProps.color,
        hslColor: hexToHSL(nextProps.color),
        stateColor: nextProps.color
      });
    }
  }

  handleHexChange (event) {
    const fullHexColorRegEx = /^#?(#{1})([A-F\d]{6})$/;
    const shortHexColorRegEx = /^#?(#{1})([A-F\d]{3})$/;
    this.setState({
      color: event.target.value
    });
    if (
      fullHexColorRegEx.test(event.target.value) &&
      this.props.activeColor !== 'none'
    ) {
      this.props.handleColorChange({ hex: event.target.value.toLowerCase() });
      this.setState({
        hslColor: hexToHSL(event.target.value.toLowerCase())
      });
    } else if (
      shortHexColorRegEx.test(event.target.value) &&
      this.props.activeColor !== 'none'
    ) {
      const shortHexValue = event.target.value.toLowerCase();
      const fullHexValue =
        shortHexValue[0] +
        shortHexValue[1] +
        shortHexValue[1] +
        shortHexValue[2] +
        shortHexValue[2] +
        shortHexValue[3] +
        shortHexValue[3];
      this.props.handleColorChange({ hex: fullHexValue });
      this.setState({
        hslColor: hexToHSL(fullHexValue)
      });
    }
  }

  render () {
    return (
      <div className="color-input">
        <h4 className="color-input__copy-header">
          {this.props.activeColor === 'none'
            ? 'copy all colors'
            : `copy ${this.props.activeColor} color`}
        </h4>
        <div className="color-input__copy-buttons">
          <span className="color-input__copy-buttons__hex-btn">HEX</span>
          <span className="color-input__copy-buttons__hsl-btn">HSL</span>
        </div>
        <h4 className="color-input__input-header">color values</h4>
        <div className="color-input__input-box">
          <div className="color-input__input-box__hex-input">
            <input
              type="text"
              value={this.state.color.toUpperCase()}
              onChange={this.handleHexChange}
            />
          </div>
          <div className="color-input__input-box__hue-input">
            <input
              type="number"
              min="0"
              max="360"
              value={this.state.hslColor.h}
            />
          </div>
          <div className="color-input__input-box__saturation-input">
            <input
              type="number"
              min="0"
              max="100"
              value={this.state.hslColor.s}
            />
          </div>
          <div className="color-input__input-box__lightness-input">
            <input
              type="number"
              min="0"
              max="100"
              value={this.state.hslColor.l}
            />
          </div>
        </div>
      </div>
    );
  }
}

ColorInput.propTypes = {
  activeColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeColor: state.sideMenuReducer.activeColor
});

export default connect(mapStateToProps)(ColorInput);
