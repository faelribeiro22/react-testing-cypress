import React, { lazy } from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./App/PrivateRoute";
import AuthRoute from "./App/AuthRoute";

const LoginPage = lazy(() => import("./Auth/LoginPage"));
const RegisterPage = lazy(() => import("./Auth/RegisterPage"));
const HomePage = lazy(() => import("./Home/HomePage"));
const PaymentPage = lazy(() => import("./Payment/PaymentPage"));
const PaymentSuccessPage = lazy(() => import("./Payment/PaymentSuccessPage"));

const Routes = () => (
  <Switch>
    <AuthRoute exact path="/register" component={RegisterPage} />
    <AuthRoute exact path="/login" component={LoginPage} />

    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute exact path="/payment/course/:id" component={PaymentPage} />
    <PrivateRoute
      exact
      path="/payment/success"
      component={PaymentSuccessPage}
    />
  </Switch>
);

export default Routes;
