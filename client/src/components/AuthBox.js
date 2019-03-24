import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {},
  paper: {
    maxWidth: 450,
    margin: "80px auto 20px auto",
    padding: theme.spacing.unit * 3
  }
});

const AuthBox = ({ classes, children, underLink }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>{children}</Paper>
    <Typography align="center">{underLink}</Typography>
  </div>
);

export default withStyles(styles)(AuthBox);
