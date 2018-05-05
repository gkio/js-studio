import React, { Component } from "react";
import { string, func } from "prop-types";
import { connect } from "react-redux";
import Header from "./components/header";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Toolbar from "./components/Toolbar";
import { setAppName } from "./redux/actions";
import { REDUCER_NAME as GLOBAL_REDUCER_NAME } from "./redux/actionTypes";
import reducer from "./redux/reducer";
import { injectAsyncReducer } from "./redux/store";

injectAsyncReducer(GLOBAL_REDUCER_NAME, reducer);

@connect(
  state => ({
    appName: state[GLOBAL_REDUCER_NAME].appName
  }),
  {
    _setAppName: setAppName
  }
)
class App extends Component {
  static props = {
    _setAppName: func,
    appName: string
  };

  render() {
    const { _setAppName } = this.props;
    const { appName } = this.props;
    return (
      <div className="pt-dark">
        <Header appName={appName} />
        <Modal setAppName={_setAppName} visible={!appName} />
        <Toolbar />
        {appName && <Tab />}
      </div>
    );
  }
}
export default App;
