import React, { useState } from "react";
import { styled, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Check, Add } from "@material-ui/icons";

import { CHOSE_THEME_COLOR, ACTION_CHANGE_BACKGROUND_COLOR } from "../actions";
import ColorBoard from "./ColorBoard";

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
  height: "32px",
  width: "32px",
  margin: "4px",
  color: "white",
  overflow: "hidden",
});

const ColorIcon = styled("div")({
  position: "absolute",
  top: "4px",
  left: " 4px",
  display: " inline-block",
  fontSize: "18px",
  lineHeight: "18px",
  width: "18px",
  height: "18px",
  color: "rgba(0, 0, 0, 5)",
  fontWeight: "bold",
});

const MODE_ADD = "ADD";
const MODE_SELECT = "SELECT";
export default ({ type }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(MODE_SELECT);

  let Colors;
  if (type === "theme") {
    Colors = useSelector((store) => store.ThemeColor);
  } else {
    Colors = [];
  }

  return (
    <Container>
      {mode === MODE_SELECT ? (
        <>
          {Colors.map(({ id, color, checked }) => (
            <Tooltip title={color} key={id} placement="top-start">
              <Color
                style={{ background: color }}
                onClick={() => {
                  dispatch(ACTION_CHANGE_BACKGROUND_COLOR(color));
                  dispatch(CHOSE_THEME_COLOR(id));
                }}
              >
                {checked ? (
                  <ColorIcon>
                    <Check style={{ color: "white" }} />
                  </ColorIcon>
                ) : (
                  <></>
                )}
              </Color>
            </Tooltip>
          ))}
          <Tooltip title="맞춤색상추가" placement="top-start">
            <Color style={{ background: "#eeeeee" }}>
              <ColorIcon onClick={() => setMode(MODE_ADD)}>
                <Add style={{ color: "white" }} />
              </ColorIcon>
            </Color>
          </Tooltip>
        </>
      ) : (
        <>
          <ColorBoard />
        </>
      )}
    </Container>
  );
};
