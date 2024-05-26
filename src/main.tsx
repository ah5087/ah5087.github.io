import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App title="Hello!" />
  </React.StrictMode>
); */
