import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import { toggleSideBar } from '../actions';

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
