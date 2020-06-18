import React from "react";
import styled from "styled-components";
import { Card, makeStyles } from "@material-ui/core";
import Title from "../Title";
import SurveyCard from "../../../Component/SurveyCard";
import Item from "../Item";

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
        <Title />
        <SurveyCard>
          <Item />
        </SurveyCard>
        <Card className={classes.Card} />
        <Card className={classes.Card} />
      </FormWrap>
    </Container>
  );
};
