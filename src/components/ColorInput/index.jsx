import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import { hexToHsl, hslToRgb, shortHexToLong } from './converters';

class ColorInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      localColor: this.props.color.hex,
      hslColor: {
        h: this.props.color.hsl.h.toString(),
        s: this.props.color.hsl.s.toString(),
        l: this.props.color.hsl.l.toString()
      },
      stateColor: this.props.color
    };
    this.handleHexChange = this.handleHexChange.bind(this);
    this.handleHSLChange = this.handleHSLChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.color !== this.state.stateColor) {
      this.setState({
        localColor: nextProps.color.hex,
        hslColor: {
          h: nextProps.color.hsl.h.toString(),
          s: nextProps.color.hsl.s.toString(),
          l: nextProps.color.hsl.l.toString()
        },
        stateColor: nextProps.color
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
        hsl: hexToHsl(event.target.value.toLowerCase())
      });
    } else if (
      shortHexColorRegEx.test(event.target.value) &&
      this.props.activeColor !== 'none'
    ) {
      const shortHexValue = event.target.value.toLowerCase();
      const fullHexValue = shortHexToLong(shortHexValue);
      this.props.handleColorChange({
        hex: fullHexValue,
        hsl: hexToHsl(fullHexValue)
      });
    }
  }

  handleHSLChange (event, type) {
    const numberRegEx = /^\d{1,3}$/;
    this.setState({
      hslColor: {
        ...this.state.hslColor,
        [type]: event.target.value
      }
    });
    if (
      numberRegEx.test(event.target.value) &&
      this.props.activeColor !== 'none'
    ) {
      const value = parseInt(event.target.value);

      if (type === 'h' && value >= 0 && value <= 360) {
        this.props.handleColorChange({
          hex: hslToRgb({ ...this.state.hslColor, h: value }),
          hsl: {
            h: value,
            s: parseInt(this.state.hslColor.s),
            l: parseInt(this.state.hslColor.l)
          }
        });
      }
      if (value >= 0 && value <= 100) {
        if (type === 's') {
          this.props.handleColorChange({
            hex: hslToRgb({ ...this.state.hslColor, [type]: value }),
            hsl: {
              h: parseInt(this.state.hslColor.h),
              s: value,
              l: parseInt(this.state.hslColor.l)
            }
          });
        }
        if (type === 'l') {
          this.props.handleColorChange({
            hex: hslToRgb({ ...this.state.hslColor, [type]: value }),
            hsl: {
              h: parseInt(this.state.hslColor.h),
              s: parseInt(this.state.hslColor.s),
              l: value
            }
          });
        }
      }
    }
  }

  render () {
    return (
      <div className="color-input">
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
              type="text"
              pattern="[0-9]*"
              value={this.state.hslColor.h}
              onChange={event => this.handleHSLChange(event, 'h')}
            />
          </div>
          <div className="color-input__input-box__saturation-input">
            <input
              type="text"
              pattern="[0-9]*"
              value={this.state.hslColor.s}
              onChange={event => this.handleHSLChange(event, 's')}
            />
          </div>
          <div className="color-input__input-box__lightness-input">
            <input
              type="text"
              pattern="[0-9]*"
              value={this.state.hslColor.l}
              onChange={event => this.handleHSLChange(event, 'l')}
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
  activeColor: state.activeColor
});

export default connect(mapStateToProps)(ColorInput);
