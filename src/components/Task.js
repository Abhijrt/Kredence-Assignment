import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      completed: false,
    };
  }

  handleChange = (name, value) => {
    if (name === "title") {
      this.setState({ title: value });
    } else {
      this.setState({ completed: value });
    }
  };

  handleAddTask = () => {
    const { title, completed } = this.state;
    if (title.length === 0 || completed.length === 0) {
      return;
    }
    this.props.onAddTask(title, completed);
  };

  render() {
    const { isLoggedIn, tasks, onTaskDelete } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    console.log(tasks);
    return (
      <div style={styles.mainContainer}>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <Button
                style={{ marginBottom: 30 }}
                variant="contained"
                color="primary"
                onClick={this.handleAddTask}
              >
                Add Task
              </Button>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form style={styles.formContainer}>
              <TextField
                style={styles.inputField}
                label="Title"
                onChange={(e) => this.handleChange("title", e.target.value)}
              />
              <br />
              <TextField
                style={styles.inputField}
                label="Completed"
                onChange={(e) => this.handleChange("completed", e.target.value)}
              />
              <br />
            </form>
          </AccordionDetails>
        </Accordion>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell component="th" scope="taks">
                    {task.id}
                  </TableCell>
                  <TableCell align="center">{task.title}</TableCell>
                  <TableCell align="left">{task.completed}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => onTaskDelete(task.id)}
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    marginTop: "30px",
  },
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
