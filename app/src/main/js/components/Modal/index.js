import React, { Component } from "react";
import { Dialog, Button } from "@blueprintjs/core";
import { func, any, bool, string } from "prop-types";

class Modal extends Component {
  static props = {
    onSubmit: func,
    children: any,
    visible: bool,
    title: string
  };

  render() {
    const { children, onSubmit, visible, title, onClose } = this.props;

    return (
      <div>
        <Dialog
          className="pt-dark"
          title={title}
          onClose={onClose}
          isOpen={visible}
        >
          <div className="pt-dialog-body">{children}</div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button
                className="pt-intent-success pt-icon-add"
                onClick={onSubmit}
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
