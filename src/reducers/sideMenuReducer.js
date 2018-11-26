const sideMenuReducer = (state = { sideBarOpened: true }, action) => {
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
    default:
      return state;
  }
};

export default sideMenuReducer;
