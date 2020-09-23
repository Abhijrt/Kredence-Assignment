import React, { Component } from "react";
import Data from "./Data";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <div style={styles.container}>
          <select style={styles.dropDown} onChange={this.handleChange}>
            <option value="none" selected>
              None
            </option>
            <option value="apple">Apple</option>
            <option value="microsoft">MicroSoft</option>
            <option value="kredence">Kredence</option>
            <option value="amazon">Amazon</option>
            <option value="facebook">Facbook</option>
          </select>
          <div style={styles.dataContainer}>
            {value ? <Data value={value} /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  dropDown: {
    padding: "20px",
    width: "30%",
    marginTop: "40px",
    float: "left",
    marginLeft: "40px",
    backgroundColor: "lightgrey",
    border: "none",
  },
  dataContainer: {
    marginTop: "80px",
    textAlign: "left",
    marginLeft: "50px",
  },
};
