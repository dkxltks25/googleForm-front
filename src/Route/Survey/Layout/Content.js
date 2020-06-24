import React from "react";
import { styled } from "@material-ui/core";
import Title from "../Title";
import Item from "../Item";
import Toolbar from "../Toolbar";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "600px",
  padding: theme.spacing(3),
}));
const FormWrap = styled("div")({
  width: 770,
  margin: "60px auto",
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
