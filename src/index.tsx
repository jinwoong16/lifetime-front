import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
