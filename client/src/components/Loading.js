import React from "react";
import Grid from "@material-ui/core/Grid";

const Loading = ({ isLoading, children, margin }) => {
  return isLoading ? (
    <div style={margin ? { padding: `${margin}px 0` } : undefined}>
      <Grid container justify="center">
        Carregando...
      </Grid>
    </div>
  ) : (
    children
  );
};

export default Loading;
