import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Normalize from "react-normalize";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Normalize /> <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
