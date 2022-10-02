import React from "react";
import ReactDOM from "react-dom";

// Importing the Bootstrap CSS
import "bootswatch/dist/pulse/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.jsx";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
