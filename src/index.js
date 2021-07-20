import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./utils/persistStore";
import history from "./utils/history";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
