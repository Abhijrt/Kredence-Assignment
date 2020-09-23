import React from "react";
// import { AppBar, Tabs, Tab } from "material-ui";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

export default function () {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <h1>Task Manager</h1>
          <ul style={styles.listContainer}>
            <li style={styles.listItem}>
              <Link to="/home" style={styles.link}>
                Home
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/task" style={styles.link}>
                Task
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/user" style={styles.link}>
                User
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const styles = {
  listContainer: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
  },
  listItem: {
    fontSize: "30px",
    marginLeft: "20px",
  },
  link: {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
  },
};
