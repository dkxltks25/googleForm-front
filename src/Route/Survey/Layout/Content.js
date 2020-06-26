import React from "react";
import { styled } from "@material-ui/core";
import Title from "../Title";
import Item from "../Item";
import Toolbar from "../Toolbar";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "600px",
  paddingTop: theme.spacing(10),
}));
const FormWrap = styled("div")({
  width: 770,
  margin: "0 auto",
});

export default () => {
  return (
    <Container>
      <FormWrap>
        <Toolbar />
        <Title />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </FormWrap>
    </Container>
  );
};
