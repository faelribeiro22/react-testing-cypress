import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  item: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "0 16px"
  }
};

const Container = ({ classes, children }) => (
  <div>
    <div className={classes.item}>{children}</div>
  </div>
);

export default withStyles(styles)(Container);
