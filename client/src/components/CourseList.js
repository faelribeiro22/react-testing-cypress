import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CourseCard from "./CourseCard";

const styles = {
  root: {
    margin: "30px 0"
  }
};

const CourseList = ({ classes, courses }) => (
  <Grid container spacing={16} className={classes.root}>
    {courses.map(course => (
      <Grid item xs={3} key={course.id}>
        <CourseCard {...course} />
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(CourseList);
