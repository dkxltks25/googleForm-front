import React from "react";
import { styled } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Drawer from "../../../Component/Drawer";

const Container = styled("div")({
  backgroundColor: "#ede7f6",
});

export default () => {
  return (
    <>
      <Container>
        <Header />
        <Content />
      </Container>
      <Drawer />
    </>
  );
};
