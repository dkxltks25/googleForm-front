import React from "react";
import { styled, Button } from "@material-ui/core";

const Container = styled("div")({
  padding: 24,
});

const ColorArea = styled("div")({});
const ColorSlider = styled("div")({});
const ColorInput = styled("div")({});
const ColorButtonColumn = styled();
const CancelButton = styled(Button)({});
const SelectButton = styled(Button)({});

export default () => (
  <Container>
    <ColorArea />
    <ColorSlider />
    <ColorInput />
    <ColorButtonColumn>
      <CancelButton />
      <SelectButton />
    </ColorButtonColumn>
  </Container>
);
