const sideMenuReducer = (
  state = {
    sideBarOpened: true,
    colors: {
      primary: '#FFF',
      secondary: '#F00',
      mainbg: '#0F0',
      aditionalbg: '#00F'
    },
    activeColor: 'secondary'
  },
  action
) => {
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
        colors: { ...state.colors, [state.activeColor]: action.color }
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

export default sideMenuReducer;
