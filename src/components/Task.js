import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Task extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <div>Task</div>;
  }
}
