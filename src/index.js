import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const documentRoot = document.querySelector("#root");
const body = document.querySelector("body");
root.render(
  <React.StrictMode>
    <App body={body} root={documentRoot} />
  </React.StrictMode>
);

reportWebVitals();
