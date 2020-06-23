import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Container = styled.div`
  background-color: #ede7f6;
  margin: 0px auto;
  padding: 0px;
`;
export default () => (
  <Container>
    <Header />
    <Content />
  </Container>
);
