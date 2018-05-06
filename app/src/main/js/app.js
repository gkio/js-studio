import React, { Component } from "react";
import { string, func } from "prop-types";
import { connect } from "react-redux";
import Header from "./components/header";
import NewProject from "./components/NewProject";
import Tab from "./components/Tab";
import Toolbar from "./components/Toolbar";
import { REDUCER_NAME as GLOBAL_REDUCER_NAME } from "./redux/actionTypes";
import reducer from "./redux/reducer";

import { injectAsyncReducer } from "./redux/store";

injectAsyncReducer(GLOBAL_REDUCER_NAME, reducer);

@connect(state => ({
  appName: state[GLOBAL_REDUCER_NAME].appName
}))
class App extends Component {
  static props = {
    appName: string
  };

  render() {
    const { _setAppName } = this.props;
    const { appName } = this.props;
    return (
      <div className="pt-dark">
        <Header appName={appName} />
        <NewProject appName={appName} />
        <Toolbar />
        {appName && <Tab />}
      </div>
    );
  }
}
export default App;
