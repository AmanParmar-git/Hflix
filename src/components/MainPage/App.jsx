import React, { Component, Fragment } from "react";
import "./App.css";
import Rows from "./Rows";
import Row from "./row";

class App extends Component {
  state = {
    color: true,
    bcimg: "",
    query: "",
    key: 1,
  };

  myCallBackHoverIn = (bcimg) => {
    if (bcimg === null) return;
    let bcimg1 = "https://image.tmdb.org/t/p/w1280" + bcimg;
    let color = false;
    this.setState({ bcimg: bcimg1, color });
  };

  myCallBackHoverOut = () => {
    let color = true;
    this.setState({ color });
  };

  getBg = () => {
    if (this.state.color) {
      return { backgroundColor: "#111" };
    }
    return {
      backgroundImage: `url(${this.state.bcimg})`,
    };
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.setState({ key: Math.random() });
  };

  getRows = () => {
    if (!this.state.query) {
      return (
        <Rows
          getBg={this.getBg}
          myCallBackHoverIn={this.myCallBackHoverIn}
          myCallBackHoverOut={this.myCallBackHoverOut}
        ></Rows>
      );
    } else {
      return (
        <div style={this.getBg()} className="search" key={this.state.key}>
          <Row
            callBackIn={this.myCallBackHoverIn}
            callBackOut={this.myCallBackHoverOut}
            name="7"
            title="Results"
            query={this.state.query}
          ></Row>
        </div>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <nav
          className="navbar navbar-dark bg-transparent justify-content-between"
          style={{ position: "fixed", width: "100%" }}
        >
          <form
            className="form-inline"
            style={{ margin: "0% auto" }}
            id="search"
          >
            <input
              className="form-control mr-sm-2"
              placeholder="Search"
              aria-label="Search"
              value={this.state.query}
              onChange={this.handleChange}
              style={{ backgroundColor: "transparent" }}
            />
          </form>
        </nav>
        {this.getRows()}
      </Fragment>
    );
  }
}

export default App;
