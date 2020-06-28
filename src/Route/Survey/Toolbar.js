import React, { useCallback } from "react";
import { Card, styled, IconButton } from "@material-ui/core";
import {
  TextFields,
  Input,
  ImageOutlined,
  OndemandVideo,
  ViewAgendaOutlined,
  AddCircleOutline,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { ACTION_ADD_ITEM } from "../../actions";

const Container = styled("div")({
  display: "flex",
  height: 0,
  boxPack: "end",
  justifyContent: "flex-end",
  position: "relative",
  width: "100%",
});
const IconButtonList = styled(Card)({
  position: "absolute",
  right: "-62px",
  borderRadius: 10,
});
const ListWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
});
export default () => {
  const dispatch = useDispatch();
  const AddSurveyItem = useCallback(() => dispatch(ACTION_ADD_ITEM), [
    dispatch,
  ]);
  return (
    <Container>
      <IconButtonList>
        <ListWrap>
          <IconButton onClick={AddSurveyItem}>
            <AddCircleOutline />
          </IconButton>
          <IconButton>
            <Input />
          </IconButton>
          <IconButton>
            <TextFields />
          </IconButton>
          <IconButton>
            <ImageOutlined />
          </IconButton>
          <IconButton>
            <OndemandVideo />
          </IconButton>
          <IconButton>
            <ViewAgendaOutlined />
          </IconButton>
        </ListWrap>
      </IconButtonList>
    </Container>
  );
};
