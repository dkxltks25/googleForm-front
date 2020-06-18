import React from "react";
import Layout from "../Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
import Routes from "./Router";
import { BrowserRouter } from "react-router-dom";
export default () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
