import React from "react";
import styled from "styled-components";
import { Card, makeStyles } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
`;
const Head = styled.div`
  width: 100%;
  background-color: blue;
  border-radius: 20px 20px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: calc(100% + 2px);
`;
const useStyle = makeStyles({
  Card: {
    width: "100%",
    minHeight: 220,
  },
});
export default () => {
  const classes = useStyle();
  return (
    <Container>
      <Head />
      <Card className={classes.Card} />
    </Container>
  );
};
