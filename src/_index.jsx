/* 
  Entry point for the app.
  You probably don't need to edit this file.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import app styles
import "./style/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Encapsulate the app in React.StrictMode to enable additional warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
