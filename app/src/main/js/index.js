import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { injectGlobal } from "styled-components";
import "./main.scss";
import store from "./redux/store";
import App from "./app";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(29,37,44);
    margin: 10px;
  }
`;

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById("reactbody")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    // eslint-disable-next-line
    const nextApp = require("./app").default;
    render(nextApp);
  });
}

// module.hot.accept('./reducers', () => {
//   // eslint-disable-next-line
//   const nextRootReducer = require('./reducers/index');
//   store.replaceReducer(nextRootReducer);
// });
