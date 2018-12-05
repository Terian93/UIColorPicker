import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import FirstTemplate from './templates/FirstTemplate';
import SecondTemplate from './templates/SecondTemplate';
import ThirdTemplate from './templates/ThirdTemplate';
import './style.scss';

const PageMock = ({ colors }) => {
  return (
    <section className="page-mock-router">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/first-template" />}
        />
        <Route
          path="/first-template"
          component={props => <FirstTemplate {...props} colors={colors} />}
        />
        <Route
          path="/second-template"
          component={props => <SecondTemplate {...props} colors={colors} />}
        />
        <Route
          path="/third-template"
          component={props => <ThirdTemplate {...props} colors={colors} />}
        />
      </Switch>
    </section>
  );
};

PageMock.propTypes = {
  colors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  colors: state.sideMenuReducer.colors
});

export default withRouter(connect(mapStateToProps)(PageMock));
