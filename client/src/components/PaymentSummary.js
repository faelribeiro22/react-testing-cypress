import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    margin: "30px 0",
    padding: 16
  },
  image: {
    width: 120,
    borderRadius: 4,
    marginRight: 16
  },
  course: {
    display: "flex",
    margin: "30px 0"
  },
  actions: {
    textAlign: "right",
    "& a": {
      marginLeft: 16
    }
  }
};

const PaymentSummary = ({ classes, course }) => (
  <Paper className={classes.root}>
    <Typography variant="h4">Pagamento</Typography>
    <div className={classes.course}>
      <div>
        <img
          className={classes.image}
          src={`/images/${course.image}`}
          alt="Course"
        />
      </div>
      <div>
        <Typography variant="h5" gutterBottom>
          {course.name}
        </Typography>
        <Typography color="textSecondary">{course.summary}</Typography>
      </div>
    </div>
    <div className={classes.actions}>
      <Button variant="contained" component={Link} to="/">
        Cancelar
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/payment/success"
      >
        Concluir compra
      </Button>
    </div>
  </Paper>
);

export default withStyles(styles)(PaymentSummary);
