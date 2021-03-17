import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Theme from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
