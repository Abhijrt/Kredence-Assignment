import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

export default class User extends Component {
  render() {
    const { isEditable, isLoggedIn, isLoggedInId, users } = this.props.element;
    const { onButtonClick, onLogOutClick } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    var user = users[isLoggedInId];
    return (
      <div style={styles.container}>
        <p style={styles.userName}>User Name : {user.userName} </p>
        <br />
        <p style={styles.passwordContainer}>
          Password :
          {isEditable ? (
            <input style={styles.input} value={user.password} />
          ) : (
            <span style={styles.password}>{user.password}</span>
          )}
        </p>

        <div>
          {isEditable ? (
            <Button
              style={styles.buttonContainer}
              variant="contained"
              color="primary"
              onClick={onButtonClick}
            >
              Save Password
            </Button>
          ) : (
            <Button
              style={styles.buttonContainer}
              variant="contained"
              color="primary"
              onClick={onButtonClick}
            >
              Change Password
            </Button>
          )}
          <Button
            style={styles.buttonContainer}
            variant="contained"
            color="primary"
            onClick={onLogOutClick}
          >
            Log Out
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "50px",
    float: "left",
    marginLeft: "50px",
  },
  userName: {
    fontSize: "30px",
  },
  password: {
    fontSize: "30px",
    // marginLeft: "50px",
  },
  input: {
    marginLeft: "30px",
    fontSize: "30px",
  },
  passwordContainer: {
    fontSize: "30px",
  },
  buttonContainer: {
    padding: "10px",
    margin: "20px",
  },
};
