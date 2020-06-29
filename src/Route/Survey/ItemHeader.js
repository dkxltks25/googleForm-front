import React, { useCallback, useState } from "react";
import { styled, TextField, IconButton, Typography } from "@material-ui/core";
import { DragIndicator, Image } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Select from "../../Component/Select";
import { ACTION_ADD_ITEM_TITLE } from "../../actions";

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

const VisibleTitleWrap = styled("div")({
  paddingLeft: 24,
  paddingRight: 24,
});
const VisibleTitle = styled(Typography)({
  minWidth: 460,
});

const ItemHeader = ({ title, itemType, focused }) => {
  const dispatch = useDispatch();
  const [titleValue, setTitle] = useState(title);
  const handleChangeTitle = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_TITLE(titleValue));
  }, [dispatch, titleValue]);
  return (
    <>
      <DragArea>
        <DragIcon />
      </DragArea>
      {focused ? (
        <InputTitleAndType>
          <ItemTitle
            variant="filled"
            placeholder="제목"
            value={titleValue}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
              handleChangeTitle();
            }}
          />
          <InputImageButton>
            <Image />
          </InputImageButton>
          <Select itemType={itemType} />
        </InputTitleAndType>
      ) : (
        <VisibleTitleWrap>
          <VisibleTitle>1234</VisibleTitle>
        </VisibleTitleWrap>
      )}
    </>
  );
};
ItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};
export default ItemHeader;
