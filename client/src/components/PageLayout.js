import React from "react";
import { connect } from "react-redux";

import Container from "./Container";
import { AppMenu } from "../components";
import { onLogout } from "../store/actions";

const PageLayout = ({ children, isAuthenticated, userName, logout }) => (
  <>
    {isAuthenticated && <AppMenu userName={userName} onLogout={logout} />}
    <Container>{children}</Container>
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  userName: state.user.name
});

const mapDispatchToProps = {
  logout: onLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout);
