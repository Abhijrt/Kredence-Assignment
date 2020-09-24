import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (name, value) => {
    if (name === "userName") {
      this.setState({ userName: value });
    } else {
      this.setState({ password: value });
    }
  };

  handleLoginButtonClick = () => {
    const { userName, password } = this.state;
    this.props.onLoginButtonClick(userName, password);
  };

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div style={styles.container}>
        <h1>Login Form</h1>
        <form style={styles.formContainer}>
          <TextField
            style={styles.inputField}
            label="User Name"
            onChange={(e) => this.handleChange("userName", e.target.value)}
          />
          <br />
          <TextField
            onChange={(e) => this.handleChange("password", e.target.value)}
            style={styles.inputField}
            label="User Password"
          />
          <br />
          <Button
            style={styles.buttonContainer}
            variant="contained"
            color="primary"
            // type="submit"
            onClick={this.handleLoginButtonClick}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "70px",
  },
  inputField: {
    width: "300px",
    height: "70px",
    marginTop: "20px",
  },
  buttonContainer: {
    marginTop: "20px",
    padding: "10px",
  },
};
