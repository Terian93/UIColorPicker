import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu/';
import { toggleSideBar, changeColor } from '../actions';

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar),
  changeColor: (colorName, color) => dispatch(changeColor(colorName, color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
