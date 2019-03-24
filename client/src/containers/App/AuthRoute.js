import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { PageLayout, Loading } from "../../components";

const AuthRoute = ({
  component: Component,
  isAuthenticated,
  userName,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return <Redirect to="/" />;
      }

      return (
        <PageLayout userName={userName}>
          <Suspense fallback={<Loading margin="80" isLoading />}>
            <Component {...props} />
          </Suspense>
        </PageLayout>
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(AuthRoute);
