export const toggleSideBar = {
  type: 'TOOGLE_SIDEBAR'
};

export const changeSideBarStatus = status => ({
  type: 'CHANGE_SIDEBAR_STATUS',
  status
});

export const changeColor = color => ({
  type: 'CHANGE_COLOR',
  color
});

export const changeActiveColor = colorName => ({
  type: 'CHANGE_ACTIVE_COLOR',
  colorName
});
