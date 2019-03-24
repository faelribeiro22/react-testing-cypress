import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    textAlign: "right"
  }
});

const AuthBoxFooter = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(AuthBoxFooter);
