import React from "react";
import { styled, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Check } from "@material-ui/icons";

import { CHOSE_THEME_COLOR, ACTION_CHANGE_BACKGROUND_COLOR } from "../actions";

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
  const dispatch = useDispatch();
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
          <Color
            style={{ background: color }}
            onClick={() => {
              dispatch(CHOSE_THEME_COLOR(id));
              dispatch(ACTION_CHANGE_BACKGROUND_COLOR(color));
            }}
          >
            {checked ? <Check /> : <></>}
          </Color>
        </Tooltip>
      ))}
    </Container>
  );
};
