import React from "react";
import { connect } from "react-redux";

import { PaymentSummary } from "../../components";
import { onGetCourse } from "../../store/actions";

class PaymentPage extends React.Component {
  componentDidMount() {
    this.props.loadCourse(this.props.match.params.id);
  }

  render() {
    const { course } = this.props;

    return <PaymentSummary course={course} />;
  }
}

const mapStateToProps = state => ({
  course: state.course
});

const mapDispatchToProps = {
  loadCourse: onGetCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentPage);
