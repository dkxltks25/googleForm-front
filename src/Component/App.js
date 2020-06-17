import React from "react";
import Layout from "./Layout";
import {ThemeProvider} from "styled-components"
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};
