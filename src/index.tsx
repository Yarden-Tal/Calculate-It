import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/common.css";
import { ColorThemeContextProvider } from "./context/ColorThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
