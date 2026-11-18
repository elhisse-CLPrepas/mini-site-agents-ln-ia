import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { App, resolvePage } from "./App";
const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App page={resolvePage(location.pathname)} />
  </React.StrictMode>
);
if (root.querySelector("main")) hydrateRoot(root, app);
else createRoot(root).render(app);
