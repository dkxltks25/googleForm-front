import React from "react";
import { styled, TextField } from "@material-ui/core";

const Container = styled("div")({
  padding: 24,
});

const ShortAnswer = styled(TextField)({
  minWidth: 340,
});
export default () => (
  <Container>
    <ShortAnswer disabled placeholder="단답형 텍스트" />
  </Container>
);
