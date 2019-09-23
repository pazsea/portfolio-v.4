import React, { Component } from "react";

import { connect } from "react-redux";
import * as a from "../../constants/actionTypes";
import * as ROUTES from "../../constants/routes";

class Skills extends Component {
  componentWillMount() {
    this.props.setPage("Skills", ROUTES.CONTACT, ROUTES.PROJECTS);
  }
  
  render() {
    return <div>Skills</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  setPage: (current, next, previous) =>
    dispatch({ type: a.SET_PAGES, current, next, previous })
});

export default connect(
  null,
  mapDispatchToProps
)(Skills);
