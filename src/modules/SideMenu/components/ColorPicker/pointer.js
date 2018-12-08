import React from 'react';
import PropTypes from 'prop-types';

export const Pointer = ({ hsv }) => {
  return (
    <div
      style={{
        backgroundColor: 'hsl(' + hsv.h + ',100%,50%)'
      }}
      className="color-picker__hue-pointer"
    />
  );
};

Pointer.propTypes = {
  hsv: PropTypes.object.isRequired
};

export default Pointer;
