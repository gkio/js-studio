import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FileInput } from "@blueprintjs/core";
import { func, string } from "prop-types";
import Modal from "../Modal";
import { setAppName } from "../../redux/actions";
import { REDUCER_NAME as GLOBAL_REDUCER_NAME } from "../../redux/actionTypes";
import reducer from "../../redux/reducer";
import { injectAsyncReducer } from "../../redux/store";

injectAsyncReducer(GLOBAL_REDUCER_NAME, reducer);

@connect(undefined, {
  _setAppName: setAppName
})
class NewProject extends Component {
  state = {
    value: "",
    folderName: "Choose file..."
  };

  static props = {
    appName: string,
    _setAppName: func
  };

  createProject = () => {
    const { value } = this.state;
    const { _setAppName } = this.props;

    if (value) {
      _setAppName(value);
    }
  };

  inputOnChange = ({ target: { value } }) => {
    if (value) {
      this.setState({ value });
    }
  };

  setFolderName = folderName => {
    this.setState({ folderName });
  };

  selectFolder = e => {
    e.preventDefault();
    const setFolderName = this.setFolderName;
    dialog.showOpenDialog(
      {
        title: "Select a folder",
        properties: ["openDirectory"]
      },
      folderPaths => {
        // folderPaths is an array that contains all the selected paths
        if (folderPaths.length) {
          setFolderName(folderPaths[0].split("/").pop());
          return;
        } else {
          console.log("No destination folder selected");
        }
      }
    );
  };

  render() {
    const { appName } = this.props;
    const { folderName } = this.state;
    return (
      <Fragment>
        <Modal
          onSubmit={this.createProject}
          title="New Project"
          visible={!appName}
        >
          <div className="pt-form-group pt-inline">
            <label
              style={{
                position: "relative",
                top: "5px"
              }}
              className="pt-label"
              htmlFor="example-form-group-input-d"
            >
              Select Folder
            </label>
            <div className="pt-form-content">
              <FileInput
                type="file"
                text={folderName}
                onClick={this.selectFolder}
              />
            </div>
          </div>
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="example-form-group-input-d">
              Project Name
            </label>
            <div className="pt-form-content">
              <input
                style={{ width: `100%` }}
                className="pt-input"
                onChange={this.inputOnChange}
              />
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default NewProject;
