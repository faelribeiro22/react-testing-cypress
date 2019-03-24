import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    width: "100%"
  }
};

const InputText = ({
  classes,
  id,
  name,
  label,
  onChange,
  value,
  validation,
  isPassword,
  maxLength,
  disabled
}) => (
  <TextField
    className={classes.root}
    margin="normal"
    variant="outlined"
    type={isPassword ? "password" : "text"}
    id={id || name}
    error={!!validation}
    helperText={validation}
    name={name}
    label={label}
    value={value}
    onChange={event => {
      onChange({ name, value: event.target.value });
    }}
    inputProps={{ maxLength }}
    disabled={disabled}
  />
);

InputText.defaultProps = {
  value: "",
  isPassword: false
};

export default withStyles(styles)(InputText);
