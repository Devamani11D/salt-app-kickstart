import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// Import <SaltProvider>
import { SaltProvider } from "@salt-ds/core";

// Import theme CSS
import "@salt-ds/theme/index.css";

// Wrap your application in a <SaltProvider>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SaltProvider>
    <App />
  </SaltProvider>
);