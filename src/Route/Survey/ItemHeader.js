import React from "react";
import { styled, TextField, IconButton, Typography } from "@material-ui/core";
import { DragIndicator, Image } from "@material-ui/icons";
import PropTypes from "prop-types";

import Select from "../../Component/Select";
/* 드래그 부분  */
const DragArea = styled("div")({
  minHeight: 20,
  width: "100%",
  "&:hover": { cursor: "move" },
});

const DragIcon = styled(DragIndicator)({
  margin: "auto",
  transform: "rotate(90deg)",
  verticalAlign: "center",
  color: "#ede7f6",
  display: "flex",
});

/* 제목 입력 & 이미지 입력 & 타입 입력 */
const InputTitleAndType = styled("div")({
  paddingLeft: 24,
  paddingRight: 24,
  display: "flex",
  justifyContent: "space-around",
});

const ItemTitle = styled(TextField)({
  flexGrow: 1,
});
const InputImageButton = styled(IconButton)({
  flexGrow: 0.1,
  maxWidth: 56,
  maxHeight: 56,
});
const TypeSelect = styled(Select)({
  flexGrow: 0.5,
});

const VisibleTitleWrap = styled("div")({
  paddingLeft: 24,
  paddingRight: 24,
});
const VisibleTitle = styled(Typography)({
  minWidth: 460,
});

const ItemHeader = ({ title, itemType, focused }) => (
  <>
    <DragArea>
      <DragIcon />
    </DragArea>
    {focused ? (
      <InputTitleAndType>
        <ItemTitle variant="filled" placeholder="제목" value={title} />
        <InputImageButton>
          <Image />
        </InputImageButton>
        <TypeSelect />
      </InputTitleAndType>
    ) : (
      <VisibleTitleWrap>
        <VisibleTitle >1234</VisibleTitle>
      </VisibleTitleWrap>
    )}
  </>
);
ItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
export default ItemHeader;
