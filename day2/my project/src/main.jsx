
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx"; // Import only App if you're using it as the root

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
