import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </React.Fragment>
    );
  }
}

export default NavBar;
