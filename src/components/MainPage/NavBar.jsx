import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-black"
        style={{
          position: "fixed",
          width: "100%",
        }}
      >
        <form
          className="form-inline my-2 my-lg-0"
          style={{ marginLeft: "auto" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={this.props.query}
            onChange={this.props.handleChange}
          />
        </form>
      </nav>
    );
  }
}

export default NavBar;
