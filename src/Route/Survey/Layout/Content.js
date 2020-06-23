import React from "react";
import styled from "styled-components";
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
      </FormWrap>
    </Container>
  );
};
