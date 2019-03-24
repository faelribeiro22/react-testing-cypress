import React from "react";
import { connect } from "react-redux";

import { CourseList } from "../../components";
import { onGetCourses } from "../../store/actions";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadCourses();
  }

  render() {
    const { courses } = this.props;

    return <CourseList courses={courses} />;
  }
}

const mapStateToProps = state => ({
  courses: state.courses
});

const mapDispatchToProps = {
  loadCourses: onGetCourses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
