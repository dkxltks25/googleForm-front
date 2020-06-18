import React from "react";
import { styled, TextField, IconButton, makeStyles } from "@material-ui/core";
import { DragIndicator, Image } from "@material-ui/icons";

const Header = styled("div")({
  minHeight: 20,
  width: "100%",
  "&:hover": { cursor: "move" },
});

const Content = styled("form")({
  paddingLeft: 24,
  paddingRight: 24,
});

const ItemHeader = styled("div")({});
const ItemContent = styled("div")({});
const ItemFooter = styled("div")({});
const useStyle = makeStyles({
  Drag: {
    margin: "auto",
    transform: "rotate(90deg)",
    verticalAlign: "center",
    color: "#ede7f6",
    display: "flex",
  },
});
export default () => {
  const classes = useStyle();
  return (
    <>
      <Header>
        <DragIndicator className={classes.Drag} />
      </Header>
      <Content>
        <ItemHeader>
          <TextField variant="filled" placeholder="제목" />
          <IconButton>
            <Image />
          </IconButton>
        </ItemHeader>
      </Content>
    </>
  );
};
