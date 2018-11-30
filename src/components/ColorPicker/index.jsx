import React, { Component } from 'react';
import { CustomPicker as customPicker } from 'react-color';
import { Saturation, Hue } from 'react-color/lib/components/common';
import './style.scss';

class ColorPicker extends Component {
  render () {
    //console.log('render ColorPicker');
    return (
      <div className="color-picker">
        <div className="color-picker__saturation">
          <Saturation {...this.props} />
        </div>
        <div className="color-picker__hue">
          <Hue {...this.props} direction={'horizontal'} />
        </div>
      </div>
    );
  }
}

export default customPicker(ColorPicker);
