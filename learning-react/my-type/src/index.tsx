import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./Color/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
