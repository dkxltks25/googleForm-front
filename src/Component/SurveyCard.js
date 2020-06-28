import React from "react";
import { Card, styled } from "@material-ui/core";

const Container = styled("div")({
  width: "100%",
  display: "flex",
  minHeight: 110,
});

const HoverBar = styled("div")({
  backgroundColor: "#4285f4",
  borderRadius: "5px 0px 0px 5px",
  width: 5,
});

const EmptyBar = styled("div")({
  borderRadius: "5px 0px 0px 5px",
  width: "5px",
});

const WrapCard = styled(Card)({
  width: "calc(100% - 8px)",
});

// eslint-disable-next-line react/prop-types
export default ({ children, focused }) => {
  return (
    <Container>
      {focused ? <HoverBar /> : <EmptyBar />}
      <WrapCard>{children}</WrapCard>
    </Container>
  );
};
