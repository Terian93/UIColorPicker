import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import hexToHSL from './hexToHSL';

//TODO add HSL onChange function
class ColorInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      localColor: this.props.color.hex,
      hslColor: {
        h: this.props.color.hsl.h,
        s: this.props.color.hsl.s,
        l: this.props.color.hsl.l
      },
      stateColor: this.props.color.hex
    };
    this.handleHexChange = this.handleHexChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.color.hex !== this.state.stateColor) {
      this.setState({
        localColor: nextProps.color.hex,
        hslColor: {
          h: nextProps.color.hsl.h,
          s: nextProps.color.hsl.s,
          l: nextProps.color.hsl.l
        },
        stateColor: nextProps.color.hex
      });
    }
  }

  handleHexChange (event) {
    const fullHexColorRegEx = /^#?(#{1})([A-F\d]{6})$/;
    const shortHexColorRegEx = /^#?(#{1})([A-F\d]{3})$/;
    this.setState({
      localColor: event.target.value
    });
    if (
      fullHexColorRegEx.test(event.target.value) &&
      this.props.activeColor !== 'none'
    ) {
      this.props.handleColorChange({
        hex: event.target.value.toLowerCase(),
        hsl: hexToHSL(event.target.value.toLowerCase())
      });
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
      this.props.handleColorChange({
        hex: fullHexValue,
        hsl: hexToHSL(fullHexValue)
      });
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
              value={this.state.localColor.toUpperCase()}
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
  color: PropTypes.object.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeColor: state.sideMenuReducer.activeColor
});

export default connect(mapStateToProps)(ColorInput);
