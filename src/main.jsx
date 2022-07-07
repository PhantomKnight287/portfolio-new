import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Partytown } from "@builder.io/partytown/react";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Partytown forward={["dataLayer.push"]} />
  </React.StrictMode>
);
