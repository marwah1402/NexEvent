import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Ensure this file exists or remove it if unnecessary

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
