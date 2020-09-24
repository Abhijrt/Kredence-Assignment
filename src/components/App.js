import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import User from "./User";
import Task from "./Task";
import Login from "./Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditable: false,
      isLoggedIn: false,
      isLoggedInId: "",
      tasks: [],
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

  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/todos";
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          tasks: data,
        });
      });
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

  handleTaskDelete = (id) => {
    const { tasks } = this.state;
    var task = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: task,
    });
  };

  onAuthRequired = ({ history }) => {
    history.push("/login");
  };

  handleAddTask = (title, completed) => {
    const length = this.state.tasks.length;
    const obj = {
      id: length + 1,
      title: title,
      completed: completed,
    };
    this.setState({
      tasks: [...this.state.tasks, obj],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
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
                console.log("Home");
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
                return (
                  <Task
                    isLoggedIn={this.state.isLoggedIn}
                    tasks={this.state.tasks}
                    onTaskAdd={this.handleTaskAdd}
                    onTaskDelete={this.handleTaskDelete}
                    onAddTask={this.handleAddTask}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
