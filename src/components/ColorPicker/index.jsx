import React, { Component } from 'react';
import { CustomPicker as customPicker } from 'react-color';
import { Saturation, Hue } from 'react-color/lib/components/common';
import './style.scss';
import Pointer from './Pointer';

class ColorPicker extends Component {
  render () {
    return (
      <div className="color-picker">
        <div className="color-picker__saturation">
          <Saturation {...this.props} />
        </div>
        <div className="color-picker__hue">
          <Hue {...this.props} direction={'horizontal'} pointer={Pointer} />
        </div>
      </div>
    );
  }
}

export default customPicker(ColorPicker);
