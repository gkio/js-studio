import React, { Component } from "react";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import brace from "brace";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import { array, func } from "prop-types";

import reducer from "./redux/reducer";
import { REDUCER_NAME as TABS_REDUCER_NAME } from "./redux/actionTypes";
import { injectAsyncReducer } from "../../redux/store";
import { setActiveTab, removeTab } from "./redux/actions";
injectAsyncReducer(TABS_REDUCER_NAME, reducer);

import "brace/mode/javascript";
import "spacegray-ace-theme";
import "./style.scss";

@connect(
  state => ({
    tabs: state[TABS_REDUCER_NAME].tabs,
    currentTab: state[TABS_REDUCER_NAME].currentTab
  }),
  {
    _setActiveTab: setActiveTab,
    _removeTab: removeTab
  }
)
class Tab extends Component {
  static props = {
    tabs: array,
    _setActiveTab: func,
    _removeTab: func
  };

  state = {};

  codeEditorChanges = value => {
    console.log(value);
  };

  removeTab = (e, tabId) => {
    e.stopPropagation();
    const { _removeTab } = this.props;

    _removeTab(tabId);
  };

  changeCurrentTab = currentTab => {
    const { _setActiveTab } = this.props;
    console.log(currentTab);
    _setActiveTab(currentTab);
  };

  render() {
    const { tabs, currentTab } = this.props;
    return (
      <div className="pt-tabs">
        <ul className="pt-tab-list" role="tablist">
          {tabs.map(({ label, workbench }, idx) => (
            <li
              key={idx}
              className="pt-tab"
              role="tab"
              onClick={() => this.changeCurrentTab(idx + 1)}
              aria-selected={currentTab === idx + 1}
            >
              <Icon
                style={{ marginTop: "7px", marginRight: "5px" }}
                icon={workbench ? IconNames.STYLE : IconNames.CODE}
                iconSize={Icon.SIZE_STANDARD}
              />
              {label}
              {!workbench && (
                <Icon
                  onClick={e => this.removeTab(e, idx)}
                  style={{ marginTop: "7px", marginLeft: "15px" }}
                  icon={IconNames.CROSS}
                  iconSize={Icon.SIZE_STANDARD}
                />
              )}
            </li>
          ))}
          <li className="pt-tab" role="tab" aria-selected="false">
            <Icon
              style={{ marginTop: "7px", color: "#fff" }}
              icon={IconNames.PLUS}
              iconSize={Icon.SIZE_STANDARD}
            />
          </li>
        </ul>
        <div className="pt-tab-panel" role="tabpanel" aria-hidden="true">
          Selected panel
        </div>
        <div className="pt-tab-panel" role="tabpanel" aria-selected="true">
          <AceEditor
            mode="javascript"
            theme="space_gray"
            fontSize="15px"
            showPrintMargin={false}
            width="70%"
            onChange={this.codeEditorChanges}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="pt-tab-panel" role="tabpanel" aria-hidden="true">
          Disabled panel
        </div>
      </div>
    );
  }
}

export default Tab;
