const defaultState = {
  sideBarOpened: true,
  colors: {
    primary: {
      hex: '#03a9f4',
      hsl: {
        h: 199,
        s: 98,
        l: 48
      },
      font: 'white'
    },
    secondary: {
      hex: '#2196f3',
      hsl: {
        h: 207,
        s: 90,
        l: 54
      },
      font: 'white'
    },
    mainbg: {
      hex: '#ffffff',
      hsl: {
        h: 0,
        s: 0,
        l: 100
      },
      font: 'black'
    },
    aditionalbg: {
      hex: '#aaaaaa',
      hsl: {
        h: 0,
        s: 0,
        l: 67
      },
      font: 'black'
    }
  },
  activeColor: 'none'
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOOGLE_SIDEBAR':
      return {
        ...state,
        sideBarOpened: !state.sideBarOpened
      };
    case 'CHANGE_SIDEBAR_STATUS':
      return {
        ...state,
        sideBarOpened: action.status
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        colors: {
          ...state.colors,
          [state.activeColor]: {
            hex: action.color.hex,
            hsl: {
              h: action.color.hsl.h,
              s: action.color.hsl.s,
              l: action.color.hsl.l
            },
            font: getFontColor(action.color.hex)
          }
        }
      };
    case 'CHANGE_ACTIVE_COLOR':
      return {
        ...state,
        activeColor:
          action.colorName === state.activeColor ? 'none' : action.colorName
      };
    default:
      return state;
  }
};

const getFontColor = (bgColor, x = 133) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > x ? 'black' : 'white';
};

export default reducer;
