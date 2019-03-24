import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { PageLayout, Loading } from "../../components";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  userName,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return (
          <PageLayout userName={userName}>
            <Suspense fallback={<Loading margin="80" isLoading />}>
              <Component {...props} />
            </Suspense>
          </PageLayout>
        );
      }

      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
