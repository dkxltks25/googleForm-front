import React from "react";
import { styled, Tooltip } from "@material-ui/core";
const Container = styled("div")({
  width: "90%",
  display: "flex",
  flexWrap: "wrap",
});
const Color = styled("div")({
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "50%",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  height: "26px",
  width: "26px",
  margin: "4px",
  color: "rgba(0,0,0,0)",
  overflow: "hidden",
});

export default () => (
  <Container>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
    <Tooltip title="Add" placement="top-start">
      <Color style={{ backgroundColor: "#4caf50" }} />
    </Tooltip>
  </Container>
);
