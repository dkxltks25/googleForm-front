import React from "react";
import styled from "styled-components";
import { makeStyles, Card } from "@material-ui/core";
const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  min-height: 110px;
`;
const HoverBar = styled.div`
  background-color: #4285f4;
  border-radius: 5px 0px 0px 5px;
  width: 5px;
`;
const useStyle = makeStyles({
  Card: {
    width: "calc(100% - 8px)",
  },
});
export default () => {
  const classes = useStyle();
  return (
    <Container>
      <HoverBar />
      <Card className={classes.Card} />
    </Container>
  );
};
