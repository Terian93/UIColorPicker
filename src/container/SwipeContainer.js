import React from 'react';
import ReactSwipeEvents from 'react-swipe-events';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSideBarStatus } from '../actions';

import App from '../App';

const SwipeContainer = ({ sideBarOpened, changeSideBarStatus }) => {
  const swipeLeftEvent = () => {
    if (sideBarOpened === true) {
      changeSideBarStatus(false);
    }
  };
  const swipeRightEvent = () => {
    if (sideBarOpened === false) {
      changeSideBarStatus(true);
    }
  };

  return (
    <ReactSwipeEvents
      onSwipedLeft={swipeLeftEvent}
      onSwipedRight={swipeRightEvent}
    >
      <App />
    </ReactSwipeEvents>
  );
};

SwipeContainer.propTypes = {
  sideBarOpened: PropTypes.bool.isRequired,
  changeSideBarStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sideBarOpened: state.sideMenuReducer.sideBarOpened
});

function mapDispatchToProps (dispatch) {
  return {
    changeSideBarStatus: status => dispatch(changeSideBarStatus(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeContainer);
