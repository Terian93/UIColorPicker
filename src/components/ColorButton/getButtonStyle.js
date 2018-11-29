const getButtonStyle = (blockName, activeColorName, color) => {
  switch (blockName) {
    case 'primary':
      if (activeColorName === 'secondary') {
        return {
          background: color,
          borderRight: '0.5px solid black'
        };
      } else if (activeColorName === 'mainbg') {
        return {
          background: color,
          borderBottom: '0.5px solid black'
        };
      } else {
        return {
          background: color
        };
      }

    case 'secondary':
      if (activeColorName === 'primary') {
        return {
          background: color,
          borderLeft: '0.5px solid black'
        };
      } else if (activeColorName === 'aditionalbg') {
        return {
          background: color,
          borderBottom: '0.5px solid black'
        };
      } else {
        return {
          background: color
        };
      }

    case 'mainbg':
      if (activeColorName === 'primary') {
        return {
          background: color,
          borderTop: '0.5px solid black'
        };
      } else if (activeColorName === 'aditionalbg') {
        return {
          background: color,
          borderRight: '0.5px solid black'
        };
      } else {
        return {
          background: color
        };
      }

    case 'aditionalbg':
      if (activeColorName === 'secondary') {
        return {
          background: color,
          borderTop: '0.5px solid black'
        };
      } else if (activeColorName === 'mainbg') {
        return {
          background: color,
          borderLeft: '0.5px solid black'
        };
      } else {
        return {
          background: color
        };
      }

    default:
      break;
  }
};
export default getButtonStyle;
