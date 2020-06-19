import React from "react";
import { Card, styled, IconButton } from "@material-ui/core";
import {
  TextFields,
  Input,
  ImageOutlined,
  OndemandVideo,
  ViewAgendaOutlined,
  AddCircleOutline,
} from "@material-ui/icons";
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
});
const ListWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
});
export default () => {
  return (
    <Container>
      <IconButtonList>
        <ListWrap>
          <IconButton>
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
