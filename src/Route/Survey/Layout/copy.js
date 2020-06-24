import React from "react";
import { styled } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Drawer from "../../../Component/Drawer";

const Container = styled("div")((theme)=>({
  backgroundColor: "#ede7f6",
  display: "flex",
}))

const drawerWidth = 240;

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
