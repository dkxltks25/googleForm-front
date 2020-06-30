import React from "react";
import { styled } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Drawer from "../../../Component/Drawer";
import DragContainer from "../../../Component/DragContainer";

const Container = styled("div")({});

export default () => {
  return (
    <DragContainer>
      <Container>
        <Header />
        <Content />
      </Container>
      <Drawer />
    </DragContainer>
  );
};
