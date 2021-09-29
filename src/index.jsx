import React from "react";
import ReactDOM from "react-dom";

// Importing the Bootstrap CSS
import "bootswatch/dist/pulse/bootstrap.min.css";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
