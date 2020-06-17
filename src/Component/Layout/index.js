import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Conatiner = styled.div`
  margin: 0px auto;
  padding: 0px;
  width: 100%;
  min-width: 960px;
`;

export default () => (
  <Conatiner>
    <Header />
    <Content />
    <div>aside</div>
    <div>footer</div>
  </Conatiner>
);
