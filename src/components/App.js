import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import User from "./User";
import Task from "./Task";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditable: false,
      isLoggedIn: false,
      isLoggedInId: "",
      users: [
        {
          id: 0,
          userName: "Abhay",
          password: "12345",
        },
        {
          id: 1,
          userName: "Jirati",
          password: "1",
        },
      ],
    };
  }
  handleButton = () => {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onLoginButtonClick = (userName, password) => {
    const { users } = this.state;
    users.map((user) => {
      console.log(user.id);
      if (user.userName === userName && user.password === password) {
        this.setState({
          isLoggedIn: true,
          isLoggedInId: user.id,
        });
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              path="/login"
              render={() => {
                return (
                  <Login
                    isLoggedIn={this.state.isLoggedIn}
                    onLoginButtonClick={this.onLoginButtonClick}
                  />
                );
              }}
            />
            <Route
              exact
              path="/home"
              render={() => {
                return (
                  <Home
                    onButtonClick={this.handleButton}
                    isLoggedIn={this.state.isLoggedIn}
                  />
                );
              }}
            />
            <Route
              exact
              path="/user"
              render={() => {
                return (
                  <User
                    onButtonClick={this.handleButton}
                    element={this.state}
                    onLogOutClick={this.handleLogOut}
                  />
                );
              }}
            />
            <Route
              exact
              path="/task"
              render={() => {
                return <Task isLoggedIn={this.state.isLoggedIn} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
