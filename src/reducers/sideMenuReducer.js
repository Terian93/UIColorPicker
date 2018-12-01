const defaultState = {
  sideBarOpened: true,
  colors: {
    primary: '#03a9f4',
    primaryFont: 'white',
    secondary: '#2196f3',
    secondaryFont: 'white',
    mainbg: '#ffffff',
    mainbgFont: 'black',
    aditionalbg: '#aaaaaa',
    aditionalbgFont: 'black'
  },
  activeColor: 'secondary'
};

const sideMenuReducer = (state = defaultState, action) => {
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
          [state.activeColor]: action.color,
          [state.activeColor + 'Font']: getFontColor(action.color)
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

const getFontColor = (bgColor, x = 173) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > x ? 'white' : 'black';
};

export default sideMenuReducer;
