import React, { useCallback } from "react";
import { styled, IconButton, Switch } from "@material-ui/core";
import { FilterNone, DeleteOutline } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import {
  ACTION_COPY_FOCUS_ITEM,
  ACTION_REMOVE_FOCUS_ITEM,
} from "../../../actions";

const Container = styled("div")({
  margin: "0px 24px",
  paddingTop: 6,
  paddingBottom: 6,
  borderTop: "1px solid #dadce0",
  display: "flex",
  justifyContent: "space-between",
});

const EmptyArea = styled("div")({});

const DvideColumn = styled("div")({
  borderLeft: "1px solid #dadce0",
  height: "32px",
  margin: "0 16px",
  width: "0",
});

const ItemIconButtonList = styled("div")({
  display: "flex",
  alignItems: "center",
});
const ItemImportSwitch = styled("div")({});

export default () => {
  const dispatch = useDispatch();
  const CopyFocus = useCallback(() => dispatch(ACTION_COPY_FOCUS_ITEM), [
    dispatch,
  ]);
  const RemoveFocus = useCallback(() => dispatch(ACTION_REMOVE_FOCUS_ITEM), [
    dispatch,
  ]);
  return (
    <Container onMouseDown={(e) => e.preventDefault()}>
      <EmptyArea />
      <ItemIconButtonList>
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            CopyFocus();
          }}
        >
          <FilterNone />
        </IconButton>
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            RemoveFocus();
          }}
        >
          <DeleteOutline />
        </IconButton>
        <DvideColumn />
        <ItemImportSwitch>
          <span>필수</span>
          <Switch />
        </ItemImportSwitch>
      </ItemIconButtonList>
    </Container>
  );
};
