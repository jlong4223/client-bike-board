import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import history from "./utils/history";
import reducers from "./redux/reducers";
import composeEnhancers from "./utils/reduxDevTools";

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
