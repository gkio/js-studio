import React, { Component } from "react";

const MenuItem = ({ children }) => <div className="pt-button">{children}</div>;

class Toolbar extends Component {
  state = {};

  render() {
    return (
      <div className="pt-button-group pt-minimal .modifier">
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Build</MenuItem>
      </div>
    );
  }
}

export default Toolbar;
