import React from "react";
import { styled } from "@material-ui/core";

import Question from "../Question";

const Container = styled("div")({
  width: "100%",
});

export default () => (
  <Container onMouseDown={(e) => e.preventDefault()}>
    <Question />
  </Container>
);
