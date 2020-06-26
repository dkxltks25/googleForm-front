import React from "react";
import { styled, Tooltip } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Check } from "@material-ui/icons";

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
  color: "white",
  overflow: "hidden",
});

export default ({ type }) => {
  let Colors;
  if (type === "theme") {
    Colors = useSelector((store) => store.ThemeColor);
  } else {
    Colors = [];
  }
  return (
    <Container>
      {Colors.map(({ id, color, checked }) => (
        <Tooltip title={color} key={id} placement="top-start">
          <Color style={{ background: color }}>
            {checked ? <Check /> : <></>}
          </Color>
        </Tooltip>
      ))}
    </Container>
  );
};
