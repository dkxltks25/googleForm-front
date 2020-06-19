import React from "react";
import styled from "styled-components";
import { Card, makeStyles } from "@material-ui/core";
import Title from "../Title";
import Item from "../Item";
import Toolbar from "../Toolbar";
const Container = styled.div`
  width: 100%;
  min-height: 600px;
`;
const FormWrap = styled.div`
  width: 770px;
  margin: 12px auto;
`;
const useStyle = makeStyles({
  Card: {
    width: "100%",
    minHeight: 220,
    marginTop: 12,
  },
});
export default () => {
  const classes = useStyle();
  return (
    <Container>
      <FormWrap>
        <Toolbar />
        <Title />
        <Item />
        <Item />
        <Item />
        <Item />
      </FormWrap>
    </Container>
  );
};
