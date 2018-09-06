import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, isEducator }) => {
  return (<Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        isEducator ? <Redirect to="/admin" /> : <Redirect to="/dashboard" />
      )
  )} />);
};

const Protected = ({ component: Component, path, loggedIn, isEducator }) => {
  return (
    <Route path={path} render={(props) => {
      if (loggedIn) {
        if (!isEducator) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/admin" />;
        }
      } else {
        return <Redirect to="/" />;
      }
    }} />
  );
};
  

const Educator = ({ component: Component, path, loggedIn, isEducator }) => {
  return (
    <Route path={path} render={(props) => {
      if (loggedIn) {
        if (isEducator) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/dashboard" />;
        }
      } else {
        return <Redirect to="/" />;
      }
    }} />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(_.get(state, 'session.currentUser', null)),
    isEducator: Boolean(_.get(state, 'session.currentUser.is_educator', null))
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const EducatorRoute = withRouter(connect(mapStateToProps, null)(Educator));