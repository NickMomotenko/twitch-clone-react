import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { HashRouter as Router } from "react-router-dom";

import Wrapper from "./components/Wrapper/Wrapper";
import { AuthProvider } from "./hoc/Auth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Wrapper />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
