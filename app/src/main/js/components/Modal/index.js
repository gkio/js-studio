import React, { Component } from "react";
import { Dialog, Button } from "@blueprintjs/core";
import { func } from "prop-types";

class Modal extends Component {
  state = {
    visible: true,
    appName: ""
  };

  static props = {
    setAppName: func
  };

  input = {};

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  inputOnChange = ({ target: { value } }) => {
    this.setState({ appName: value });
  };

  closeModal = () => {
    const { appName } = this.state;
    const { setAppName } = this.props;

    if (appName) {
      this.setState({
        visible: false
      });
      setAppName(appName);
    }
  };

  handleOk = e => {
    this.closeModal();
  };
  handleCancel = e => {
    this.closeModal();
  };

  static getDerivedStateFromProps({ visible }) {
    return { visible };
  }

  render() {
    return (
      <div>
        <Dialog
          className="pt-dark"
          title="New Project"
          isOpen={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="pt-dialog-body">
            <input
              style={{ width: `100%` }}
              className="pt-input"
              placeholder="Set project name"
              onChange={this.inputOnChange}
            />
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button
                className="pt-intent-success pt-icon-add"
                onClick={this.closeModal}
                text="Create"
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Modal;
