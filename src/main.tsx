import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
