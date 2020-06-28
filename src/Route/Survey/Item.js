import React from "react";
import { styled } from "@material-ui/core";
import SurveyCard from "../../Component/SurveyCard";
import ItemHeader from "./ItemHeader";
import ItemContent from "./ItemContent";
import ItemActionArea from "./ItemActionArea";

const Container = styled("div")({
  marginTop: 12,
});


export default () => {
  return (
    <Container>
      <SurveyCard>
        <ItemHeader />
        <ItemContent />
        <ItemActionArea />
      </SurveyCard>
    </Container>
  );
};
