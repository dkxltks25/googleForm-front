import React from "react";
import { styled, TextField } from "@material-ui/core";

const Container = styled("div")({
  padding: 24,
});

const Long = styled(TextField)({
  minWidth: 480,
});
export default () => (
  <Container>
    <Long disabled placeholder="장문형 텍스트" />
  </Container>
);
