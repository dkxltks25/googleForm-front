import React, { useState, useCallback } from "react";
import { styled, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { ACTION_ADD_THEME_COLOR } from "../actions";

const Container = styled("div")({
  padding: 24,
  transformOrigin: "50% 50%",
});

const ColorArea = styled("div")({
  backgroundColor: "rgb(255, 204, 0)",
  minWidth: 170,
  minHeight: 120,
});
const WrapColorArea = styled("div")({
  background: "linear-gradient(to bottom,transparent 0%,#000 100%)",
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  left: 0,
});
const ColorSlider = styled("div")({});
const ColorInput = styled("div")({});
const ColorButtonColumn = styled("div")({});
const CancelButton = styled(Button)({});
const SelectButton = styled(Button)({});

export default ({ modeType, onClick }) => {
  const [color, setColor] = useState("#000");
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    onClick(modeType);
    dispatch(ACTION_ADD_THEME_COLOR(color));
  }, [color, modeType, onClick, dispatch]);
  return (
    <Container>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <TextField
        value={color}
        onChange={(e) => {
          if (e.target.value.length <= 7) {
            return;
          }
          setColor(e.target.value);
        }}
      />
      <ColorButtonColumn>
        <CancelButton onClick={() => onClick(modeType)}>취소</CancelButton>
        <SelectButton onClick={handleClick}>추가</SelectButton>
      </ColorButtonColumn>
    </Container>
  );
};
